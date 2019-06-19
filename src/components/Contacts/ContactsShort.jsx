import React from 'react'
import * as atoms from './ContactsShort.atoms'
import { links } from './data'

const topThreeLinks = links.slice(0, 3)

export function ContactsShort() {
    return (
        <atoms.ContactsShortContainer>
            <ul>
                {topThreeLinks.map(link => {
                    return (
                        <atoms.ContactsShortElement key={link.id}>
                            <a href={link.url} title={link.title} target="__blank" rel="noreferrer noopener nofollow">
                                <atoms.ContactsShortIcon icon={link.icon} />
                                <span>{link.title}</span>
                            </a>
                        </atoms.ContactsShortElement>
                    )
                })}
            </ul>
        </atoms.ContactsShortContainer>
    )
}
