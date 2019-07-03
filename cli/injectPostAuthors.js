const axios = require('axios')
const chalk = require('chalk')
const glob = require('glob')
const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')
const { promisify } = require('util')

const exec = promisify(childProcess.exec)
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

const findAllPostsFiles = () => {
    console.log(chalk.yellow(`Start searching for blog posts`))
    return new Promise((resolve, reject) => {
        glob(path.join(__dirname, '..', `/src/**/*.md`), {}, (error, files) => {
            if (error) {
                reject(error)
            } else {
                console.log(chalk.green(`All files have been found`))
                resolve(files)
            }
        })
    })
}

const findUserByEmail = async email => {
    console.log(chalk.yellow(`Fetching user info for : ${email}`))
    const {
        data: { items },
    } = await axios.get(`https://api.github.com/search/users?q=${email}`)
    const [user] = items
    const {
        data: { name },
    } = await axios.get(`https://api.github.com/users/${user.login}`)
    user.name = name
    return user
}

const parseRawAuthorString = rawAuthorString => {
    const [, linesCount, email] = /(\d+)\s<(.+)>/.exec(rawAuthorString)
    return { linesCount, email }
}

const grabFileCommiters = async file => {
    const { stdout: authorsRaw, stderr } = await exec(
        `git blame --line-porcelain ${file} | sed -n 's/^author-mail //p' | sort | uniq -c | sort -rn`,
    )
    if (stderr !== '') {
        console.log(stderr)
        process.exit(1)
    }
    const authors = authorsRaw
        .split('\n')
        .filter(Boolean)
        .map(parseRawAuthorString)
        .filter(({ email }) => email !== 'not.committed.yet')
        .filter(author => author.linesCount > 5)
    return { filename: file, authors }
}

const findUniqAuthors = filesWithAuthors => {
    const uniqAuthors = new Set()
    filesWithAuthors.forEach(({ authors }) => {
        authors.forEach(({ email }) => uniqAuthors.add(email))
    })
    return uniqAuthors
}

const populateAuthorsWithInformation = async authorsSet => {
    const authorsMap = new Map()
    for (const email of authorsSet) {
        const authorInfo = await findUserByEmail(email)
        authorsMap.set(email, authorInfo)
    }

    return authorsMap
}

const generateUserInfoTemplate = (email, authorInfoMap) => {
    const authorInfo = authorInfoMap.get(email)
    return `
    - name: ${authorInfo.name || authorInfo.login}
      email: ${email}
      avatar: ${authorInfo.avatar_url}`
}

const insertAuthorsInfoInMarkdownFiles = async (fileInfo, authorsInfoMap) => {
    console.log(chalk.yellow(`Inserting data for file ${fileInfo.filename}`))
    const template = `authors:${fileInfo.authors.map(author => generateUserInfoTemplate(author.email, authorsInfoMap))}`
    const fileContent = await readFile(fileInfo.filename, 'utf-8')
    const indexOfFrontmatterEnding = fileContent.lastIndexOf('---')
    const updatedFileContent =
        fileContent.slice(0, indexOfFrontmatterEnding) +
        template +
        '\n' +
        fileContent.slice(indexOfFrontmatterEnding).trim()
    await writeFile(fileInfo.filename, updatedFileContent)
    console.log(chalk.green(`Markdown file ${fileInfo.filename} has been prepared successfully`))
}

const init = async () => {
    const files = await findAllPostsFiles()
    console.log(chalk.yellow(`Grabbing authors`))
    const filesWithAuthors = await Promise.all(files.map(grabFileCommiters))
    const uniqAuthors = findUniqAuthors(filesWithAuthors)
    console.log(chalk.green(`All authors have been found`))
    console.log(chalk.yellow(`Fetching authors information`))
    const authorsInfoMap = await populateAuthorsWithInformation(uniqAuthors)
    console.log(chalk.green(`Author information has been fetched successfully`))
    await Promise.all(filesWithAuthors.map(file => insertAuthorsInfoInMarkdownFiles(file, authorsInfoMap)))
}
init()
// git log --pretty=format:"%an %ae" | tr 'A-Z' 'a-z' | sort | uniq
// `git blame --line-porcelain ${file} | sed -n 's/^author-mail //p' | sort | uniq -c | sort -rn`
