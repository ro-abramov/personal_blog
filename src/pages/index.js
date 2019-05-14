import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
