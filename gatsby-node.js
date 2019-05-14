const path = require(`path`)

const { createFilePath } = require(`gatsby-source-filesystem`)
const chalk = require("chalk")

const createProgressTracker = (label, text) => {
  const start = () => {
    console.log(chalk.bgRed(`${label}:`) + chalk.red(` ${text}`) + " started")
  }
  const end = () => {
    console.log(
      chalk.bgRed(`${label}:`) + chalk.red(` ${text}`) + chalk.green(" success")
    )
  }
  return {
    start,
    end,
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const progress = createProgressTracker("Markdown", "adding slug field")
    progress.start()
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: path.join("/blog", slug),
    })
    progress.end()
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const progress = createProgressTracker("Markdown", "creating blog post pages")
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
}
