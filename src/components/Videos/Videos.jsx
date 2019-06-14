import React from 'react'
import { GridElement } from '../Grid'
import { SectionTitle } from '../atoms'
import * as atoms from './Videos.atoms'

const getImageUrl = id => `https://img.youtube.com/vi/${id}/mqdefault.jpg`

export function Videos({ videos }) {
    return (
        <>
            <GridElement col="1 / span 12" as={SectionTitle}>
                Talks
            </GridElement>
            {videos.map(({ node: video }, index) => (
                <GridElement col={`${4 * index + 1} / span 4`} key={video.videoId}>
                    <atoms.VideoCard
                        title={video.name}
                        description={video.description}
                        renderImage={() => (
                            <img src={getImageUrl(video.videoId)} alt={`Cover for video ${video.name}`} />
                        )}
                    />
                </GridElement>
            ))}
        </>
    )
}
