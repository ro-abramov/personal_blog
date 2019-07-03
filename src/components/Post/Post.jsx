import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import * as atoms from './Post.atoms'
import { BackGroundImage } from './components/BackGroundImage'
import { CenterContent } from '../CenterContent'
import { AuthorsList } from './components/AuthorsList'

export function Post({ title, img, date, timeToRead, content, slug, authors }) {
    const disqusConfig = {
        url: `https://roabramov.netlify.com${slug}`,
        identifier: slug,
        title: title,
    }
    const shouldShowAuthors = authors.length > 1 || authors[0].name !== 'Ruslan Abramov'
    return (
        <>
            <BackGroundImage alt={title} fluid={img}>
                <atoms.PostInfoContainer>
                    <atoms.PostTitle>{title}</atoms.PostTitle>
                    <atoms.PostInfo>{date}</atoms.PostInfo>
                    <atoms.PostInfo>{timeToRead} min read</atoms.PostInfo>
                    {shouldShowAuthors ? <AuthorsList authors={authors} /> : null}
                </atoms.PostInfoContainer>
            </BackGroundImage>
            <CenterContent>
                <atoms.PostContent dangerouslySetInnerHTML={{ __html: content }} />
                <DiscussionEmbed shortname="roabramov" config={disqusConfig} />
            </CenterContent>
        </>
    )
}
