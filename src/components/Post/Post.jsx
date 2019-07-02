import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import * as atoms from './Post.atoms'
import { BackGroundImage } from './components/BackGroundImage'
import { CenterContent } from '../CenterContent'

export function Post({ title, img, date, timeToRead, content, slug }) {
    const disqusConfig = {
        url: `https://roabramov.netlify.com${slug}`,
        identifier: slug,
        title: title,
    }
    return (
        <>
            <BackGroundImage alt={title} fluid={img}>
                <atoms.PostInfoContainer>
                    <atoms.PostTitle>{title}</atoms.PostTitle>
                    <atoms.PostInfo>{date}</atoms.PostInfo>
                    <atoms.PostInfo>{timeToRead} min read</atoms.PostInfo>
                </atoms.PostInfoContainer>
            </BackGroundImage>
            <CenterContent>
                <atoms.PostContent dangerouslySetInnerHTML={{ __html: content }} />
                <DiscussionEmbed shortname="roabramov" config={disqusConfig} />
            </CenterContent>
        </>
    )
}
