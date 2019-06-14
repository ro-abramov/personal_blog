import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import * as atoms from '../components/atoms/atoms'

import { Layout } from '../components/Layout'
import { SEO } from '../components/seo'
import { Profile } from '../components/Profile'
import { Link } from '../components/Link'
import { Button } from '../components/Button'
import { Grid, GridElement } from '../components/Grid'
import { SectionTitle } from '../components/atoms/index'
import { RecentPosts } from '../components/RecentPosts'
import { Videos } from '../components/Videos'

const IndexPage = ({ data }) => {
    const {
        allMarkdownRemark: { edges: posts },
        allVideosYaml: { edges: videos },
        file: { childImageSharp: image },
    } = data
    return (
        <Layout isMainPage>
            <Grid>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <atoms.Cover>
                    <Image fluid={image.fluid} alt="This is me" />
                </atoms.Cover>
                <GridElement col="1 / span 7" row="2 / span 4">
                    <atoms.ShortInfo>
                        Hi there, my name is Ruslan Abramov and I welcome you on my blog.
                        <br />
                        Here you may find my collection of useful tips and tricks about front-end development,
                        time-management and other related stuff.
                    </atoms.ShortInfo>
                    <atoms.ShortInfoButtonsGroup>
                        <Button>Contact me</Button>
                        <Link type="accent" to="/about">
                            Who am I?
                        </Link>
                    </atoms.ShortInfoButtonsGroup>
                </GridElement>
                <RecentPosts posts={posts} />
                <Videos videos={videos} />
                <GridElement col="1 / span 12" as={SectionTitle}>
                    This is me
                </GridElement>
            </Grid>
            <Profile />
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(limit: 3, skip: 0, sort: { fields: frontmatter___date, order: DESC }) {
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
        file(base: { eq: "cover.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        allVideosYaml(limit: 3, sort: { fields: date }) {
            edges {
                node {
                    id
                    name
                    videoId
                    lang
                    description
                    date(formatString: "MM/DD/YYYY")
                }
            }
        }
    }
`

export default IndexPage
