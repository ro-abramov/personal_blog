import React from 'react'

import { GridElement } from '../Grid'
import { Link } from '../Link'
import * as atoms from './RecentPosts.atoms'

const layoutElementsConfigs = [
    { row: '1 / span 2', col: '9 / span 4' },
    { row: '3 / span 2', col: '7 / span 4' },
    { row: '5 / span 2', col: '5 / span 4' },
]

export function RecentPosts({ posts }) {
    return (
        <>
            {posts.map((post, index) => {
                return (
                    <GridElement key={post.node.fields.slug} {...layoutElementsConfigs[index]}>
                        <atoms.PostCard
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
                    </GridElement>
                )
            })}
            <GridElement col="11 / span 2" row="5">
                <atoms.ReadMore type="accent" to="/page=1">
                    Learn more ->
                </atoms.ReadMore>
            </GridElement>
        </>
    )
}
