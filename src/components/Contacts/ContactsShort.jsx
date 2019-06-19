import React from 'react'
import * as atoms from './ContactsShort.atoms'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTelegram, faTwitter, faLinkedin } from '@fortawesome/fontawesome-free-brands'

const links = [
    {
        id: 0,
        title: 'LinkedIn',
        url: 'https://linkedin.com/in/ruslan-abramov-008745110/',
        icon: faLinkedin,
    },
    {
        id: 1,
        title: 'Twitter',
        url: 'https://twitter.com/roabramov',
        icon: faTwitter,
    },
    {
        id: 2,
        title: 'Telegram',
        url: 'https://t.me/ro_abramov',
        icon: faTelegram,
    },
]

export function ContactsShort() {
    return (
        <atoms.ContactsShortContainer>
            <ul>
                {links.map(link => {
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
