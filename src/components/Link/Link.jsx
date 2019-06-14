import React from 'react'
import * as atoms from './Link.atoms'

export function Link({ type = 'default', ...props }) {
    return <atoms.StyledLink type={type} {...props} />
}
