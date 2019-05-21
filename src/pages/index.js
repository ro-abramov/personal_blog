import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import { SEO } from "../components/seo"
import { Posts } from "../components/Posts"
import { Pagination } from "../components/Pagination"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Posts posts={data.allMarkdownRemark.edges} />
    <Pagination
      current={data.allMarkdownRemark.pageInfo.currentPage}
      total={data.allMarkdownRemark.pageInfo.pageCount}
    />
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 10
      skip: 0
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      pageInfo {
        pageCount
        currentPage
      }
      edges {
        node {
          frontmatter {
            title
            date
            cover {
              childImageSharp {
                fluid(maxWidth: 400, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`

export default IndexPage
