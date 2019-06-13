import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import * as atoms from '../components/atoms/atoms'

import { Layout } from '../components/Layout'
import { SEO } from '../components/seo'
import { Profile } from '../components/Profile'
import { Card } from '../components/Card/Card'
import { Button } from '../components/Button'
import { SectionTitle } from '../components/atoms/index'

const layoutElementsConfigs = [
    { row: '1 / span 2', col: '9 / span 4' },
    { row: '3 / span 2', col: '7 / span 4' },
    { row: '5 / span 2', col: '5 / span 4' },
]

const IndexPage = ({ data }) => {
    const {
        allMarkdownRemark: { edges: posts },
        allVideosYaml: { edges: videos },
        file: { childImageSharp: image },
    } = data
    return (
        <Layout isMainPage>
            <atoms.Grid>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
                <atoms.Cover>
                    <Image fluid={image.fluid} alt="This is me" />
                </atoms.Cover>
                <atoms.GridElement col="1 / span 7" row="2 / span 4">
                    <atoms.ShortInfo>
                        Hi there, my name is Ruslan Abramov and I welcome you on my blog.
                        <br />
                        Here you may find my collection of useful tips and tricks about front-end development,
                        time-management and other related stuff.
                    </atoms.ShortInfo>
                    <atoms.ShortInfoButtonsGroup>
                        <Button>Contact me</Button>
                        <atoms.AccentLink to="/about">Who am I?</atoms.AccentLink>
                    </atoms.ShortInfoButtonsGroup>
                </atoms.GridElement>
                {posts.map((post, index) => {
                    return (
                        <atoms.GridElement key={post.node.fields.slug} {...layoutElementsConfigs[index]}>
                            <Card
                                dark
                                title={post.node.frontmatter.title}
                                description={post.node.excerpt}
                                renderFooter={() => {
                                    return (
                                        <>
                                            <Link to={post.node.fields.slug}>CONTINUE</Link>
                                            <span>{post.node.timeToRead} min to read</span>
                                        </>
                                    )
                                }}
                            />
                        </atoms.GridElement>
                    )
                })}
                <atoms.GridElement col="11 / span 2" row="6">
                    <atoms.AccentLink to="/page=1">Learn more -></atoms.AccentLink>
                </atoms.GridElement>
                <atoms.GridElement col="1 / span 12" as={SectionTitle}>
                    Talks
                </atoms.GridElement>
                {videos.map(({ node: video }, index) => (
                    <atoms.GridElement col={`${4 * index + 1} / span 4`} key={video.videoId}>
                        <Card
                            title={video.name}
                            description={video.description}
                            renderImage={() => (
                                <img
                                    src={`https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`}
                                    alt={`Cover for video ${video.name}`}
                                />
                            )}
                        />
                    </atoms.GridElement>
                ))}
                <atoms.GridElement col="1 / span 12" as={SectionTitle}>
                    This is me
                </atoms.GridElement>
                <atoms.GridElement col="1 / span 12">
                    <Profile />
                </atoms.GridElement>
            </atoms.Grid>
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
