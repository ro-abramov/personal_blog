import React from 'react'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { GridElement } from '../Grid'
import { SectionTitle } from '../SectionTitle'
import * as atoms from './Videos.atoms'

const getImageUrl = id => `https://img.youtube.com/vi/${id}/mqdefault.jpg`

export function Videos({ videos }) {
    return (
        <>
            <GridElement col="1 / span 12" as={SectionTitle}>
                Talks
            </GridElement>
            {videos.map(({ node: video }, index) => (
                <GridElement
                    col={`${4 * index + 1} / span 4`}
                    key={video.videoId}
                    as={atoms.VideoLink}
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="__blank"
                    rel="noreferrer noopener nofollow"
                >
                    <atoms.VideoCard
                        title={video.name}
                        description={video.description}
                        renderImage={() => (
                            <atoms.VideoImageWrapper>
                                <img src={getImageUrl(video.videoId)} alt={`Cover for video ${video.name}`} />
                                <atoms.VideoPlayIcon icon={faPlayCircle} />
                            </atoms.VideoImageWrapper>
                        )}
                    />
                </GridElement>
            ))}
        </>
    )
}
