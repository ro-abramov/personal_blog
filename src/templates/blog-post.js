import React from "react"
import { Layout } from "../components/layout"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import { SEO } from "../components/seo"
import { CenterContent } from "../components/atoms/index"

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <CenterContent>
        <Image
          fluid={post.frontmatter.cover.childImageSharp.fluid}
          alt={post.frontmatter.title}
        />
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </CenterContent>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cover {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`

export default BlogPost
