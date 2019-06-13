import React from 'react'
import * as atoms from './Post.atoms'
import { BackGroundImage } from './components/BackGroundImage'

export function Post({ title, img, date, timeToRead, content }) {
    return (
        <>
            <BackGroundImage alt={title} fluid={img}>
                <div>
                    <atoms.PostInfoTitle>{title}</atoms.PostInfoTitle>
                    <div>{date}</div>
                    <div>{timeToRead} min read</div>
                </div>
            </BackGroundImage>
            <atoms.PostContent>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </atoms.PostContent>
        </>
    )
}
