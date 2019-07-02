import React from 'react'
import * as atoms from './Button.atoms'

export function Button({ variant = 'default', ...props }) {
    return <atoms.StyledButton variant={variant} {...props} />
}
