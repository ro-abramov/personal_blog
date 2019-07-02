import React from 'react'
import * as atoms from './Posts.atoms'
import { Card } from '../Card/Card'
import { ShareButton } from '../ShareButton'
import { LangIcon } from '../LangIcon'

export const Posts = ({ posts }) => {
    return (
        <atoms.PostsList>
            {posts.map(({ node: post }) => (
                <atoms.Post key={post.fields.slug} vertical={post.frontmatter.coverImageOrientation === 'vertical'}>
                    <atoms.WrapperLink to={post.fields.slug}>
                        <Card
                            title={post.frontmatter.title}
                            description={post.excerpt}
                            renderImage={() => (
                                <atoms.PostImage
                                    fluid={post.frontmatter.cover.childImageSharp.fluid}
                                    alt={post.frontmatter.title}
                                />
                            )}
                            renderFooter={() => (
                                <>
                                    <atoms.PostInfo>
                                        <span>Language: </span>
                                        <LangIcon lang={post.frontmatter.lang} />
                                    </atoms.PostInfo>
                                    <atoms.PostInfo>
                                        <span role="img" aria-label="clock icon">
                                            🕙
                                        </span>
                                        <span> {post.timeToRead} min</span>
                                    </atoms.PostInfo>
                                    <atoms.PostInfo>{post.frontmatter.date}</atoms.PostInfo>
                                    <ShareButton slug={post.fields.slug} title={post.frontmatter.title} />
                                </>
                            )}
                        />
                    </atoms.WrapperLink>
                </atoms.Post>
            ))}
        </atoms.PostsList>
    )
}
