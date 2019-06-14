import React from 'react'
import * as atoms from './Post.atoms'
import { BackGroundImage } from './components/BackGroundImage'

export function Post({ title, img, date, timeToRead, content }) {
    return (
        <>
            <BackGroundImage alt={title} fluid={img}>
                <atoms.PostInfoContainer>
                    <atoms.PostTitle>{title}</atoms.PostTitle>
                    <atoms.PostInfo>{date}</atoms.PostInfo>
                    <atoms.PostInfo>{timeToRead} min read</atoms.PostInfo>
                </atoms.PostInfoContainer>
            </BackGroundImage>
            <atoms.PostContent>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </atoms.PostContent>
        </>
    )
}
