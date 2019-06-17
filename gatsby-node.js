const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)
const chalk = require('chalk')

const PAGE_SIZE = 10

const createProgressTracker = (label, text) => {
    const start = () => {
        console.log(chalk.bgRed(`${label}:`) + chalk.red(` ${text}`) + ' started')
    }
    const end = () => {
        console.log(chalk.bgRed(`${label}:`) + chalk.red(` ${text}`) + chalk.green(' success'))
    }
    return {
        start,
        end,
    }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` })
        const progress = createProgressTracker('Markdown', `Adding slug field - ${slug}`)
        progress.start()
        createNodeField({
            node,
            name: `slug`,
            value: path.join('/blog', slug),
        })
        progress.end()
    }
}

exports.createPages = async ({ graphql, actions }) => {
    let progress = createProgressTracker('Markdown', 'creating blog post pages')
    progress.start()
    const {
        data: { allMarkdownRemark: markDownFiles },
    } = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    // Create single post pages
    markDownFiles.edges.forEach(({ node }) => {
        actions.createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
    progress.end()
    progress = createProgressTracker('Markdown', 'create pagination list component')
    progress.start()
    Array.from({
        length: Math.ceil(markDownFiles.edges.length / PAGE_SIZE),
    }).forEach((_el, index) => {
        console.log(`creating page ${index + 1}`)
        actions.createPage({
            path: `/page=${index + 1}`,
            component: path.resolve(`./src/templates/blog-paginated-list.js`),
            context: {
                skip: index * PAGE_SIZE,
                limit: PAGE_SIZE,
            },
        })
    })
    progress.end()
}
