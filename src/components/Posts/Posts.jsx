import React from 'react'
import * as atoms from './Posts.atoms'
import { Card } from '../Card/Card'
import { ShareButton } from '../ShareButton'

export const Posts = ({ posts }) => {
    return (
        <atoms.PostsList>
            {posts.map(({ node }) => (
                <atoms.Post key={node.fields.slug} vertical={node.frontmatter.coverImageOrientation === 'vertical'}>
                    <atoms.WrapperLink to={node.fields.slug}>
                        <Card
                            title={node.frontmatter.title}
                            description={node.excerpt}
                            renderImage={() => (
                                <atoms.PostImage
                                    fluid={node.frontmatter.cover.childImageSharp.fluid}
                                    alt={node.frontmatter.title}
                                />
                            )}
                            renderFooter={() => (
                                <>
                                    <atoms.PostInfo>{node.frontmatter.date}</atoms.PostInfo>
                                    <atoms.PostInfo>
                                        <span role="img" aria-label="clock icon">
                                            🕙{' '}
                                        </span>
                                        {node.timeToRead} min read
                                    </atoms.PostInfo>
                                    <ShareButton slug={node.fields.slug} title={node.frontmatter.title} />
                                </>
                            )}
                        />
                    </atoms.WrapperLink>
                </atoms.Post>
            ))}
        </atoms.PostsList>
    )
}
