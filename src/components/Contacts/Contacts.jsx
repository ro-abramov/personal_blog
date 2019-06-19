import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { links } from './data'
import * as atoms from './Contacts.atoms'

export function Contacts() {
    return (
        <atoms.ContactsList>
            {links.map(link => {
                return (
                    <atoms.ContactElement key={link.id}>
                        <a href={link.url} target="__blank" rel="noreferrer noopener nofollow">
                            <FontAwesomeIcon icon={link.icon} />
                        </a>
                    </atoms.ContactElement>
                )
            })}
        </atoms.ContactsList>
    )
}
