import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/seo'
import { PostInfo } from '../components/Post'

const BlogPost = ({ data }) => {
    const { markdownRemark: post } = data
    return (
        <Layout hideStickyContact>
            <SEO title={post.frontmatter.title} />
            <PostInfo
                title={post.frontmatter.title}
                date={post.frontmatter.date}
                timeToRead={post.timeToRead}
                authors={post.frontmatter.authors}
                content={post.html}
                img={post.frontmatter.cover.childImageSharp.fluid}
                slug={post.fields.slug}
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
                authors {
                    name
                    avatar
                }
                cover {
                    childImageSharp {
                        fluid(maxWidth: 1200, quality: 100) {
                            ...GatsbyImageSharpFluid
                            presentationWidth
                        }
                    }
                }
            }
            fields {
                slug
            }
        }
    }
`

export default BlogPost
