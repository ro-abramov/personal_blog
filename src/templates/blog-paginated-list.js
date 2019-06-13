import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Posts } from "../components/Posts"
import { Pagination } from "../components/Pagination"
import { CenterContent } from "../components/atoms/index"

export default ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CenterContent>
      <Posts posts={data.allMarkdownRemark.edges} />
      <Pagination
        current={data.allMarkdownRemark.pageInfo.currentPage}
        total={data.allMarkdownRemark.pageInfo.pageCount}
      />
    </CenterContent>
  </Layout>
)

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
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
