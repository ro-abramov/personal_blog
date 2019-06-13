import React from 'react'
import { Layout } from '../components/Layout'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
import { PostInfo } from '../components/Post'

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data
    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <PostInfo
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                timeToRead={post.timeToRead}
                content={post.html}
                img={post.frontmatter.cover.childImageSharp.fluid}
            />
        </Layout>
    )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            timeToRead
            frontmatter {
                title
                date(formatString: "MM/DD/YYYY")
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
