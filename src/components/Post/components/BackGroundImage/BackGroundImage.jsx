import React from 'react'
import Image from 'gatsby-image'
import * as atoms from './BackGroundImage.atoms'

export function BackGroundImage({ alt, fluid, children }) {
    return (
        <atoms.BackGroundImageWrapper>
            <atoms.BackGroundImagePicture>
                <Image fluid={fluid} alt={alt} />
            </atoms.BackGroundImagePicture>
            <atoms.BackGroundImageContainer>{children}</atoms.BackGroundImageContainer>
        </atoms.BackGroundImageWrapper>
    )
}
