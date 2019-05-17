import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PostImage = styled(Image)`
  width: 300px;
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li>
          <article>
            <Link to={node.fields.slug}>
              <PostImage
                fluid={node.frontmatter.cover.childImageSharp.fluid}
                alt={node.frontmatter.title}
              />
              <header>{node.frontmatter.title}</header>
            </Link>
          </article>
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
        }
      }
    }
  }
`

export default IndexPage
