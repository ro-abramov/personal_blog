import React from 'react'
import Image from 'gatsby-image'
import * as atoms from './BackGroundImage.atoms'

export function BackGroundImage({ alt, fluid, children, photographer }) {
    return (
        <atoms.BackGroundImageWrapper>
            <atoms.BackGroundImagePicture>
                <Image fluid={fluid} alt={alt} />
            </atoms.BackGroundImagePicture>
            <atoms.BackGroundImageContainer>{children}</atoms.BackGroundImageContainer>
            <atoms.BackGroundImageLink
                href={`https://unsplash.com/@${photographer.login}?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge`}
                target="_blank"
                rel="noopener noreferrer"
                title={`Download free do whatever you want high-resolution photos from ${photographer.name}`}
            >
                <span>Photo by {photographer.name}</span>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <title>unsplash-logo</title>
                        <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
                    </svg>
                </span>
            </atoms.BackGroundImageLink>
        </atoms.BackGroundImageWrapper>
    )
}
