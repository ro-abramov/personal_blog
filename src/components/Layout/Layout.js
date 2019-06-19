import React from 'react'

import { Header } from '../Header'
import { useSiteMetaData } from '../../hooks/useSiteMetaData'
import { ContactsShort, Contacts } from '../Contacts'
import * as atoms from './Layout.atoms'

export function Layout({ children, isMainPage = false, hideStickyContact = false }) {
    const siteMetadata = useSiteMetaData()
    return (
        <>
            <atoms.GlobalStyles />
            <atoms.LayoutContainer>
                <atoms.Header>
                    <Header siteTitle={siteMetadata.title} inLightStyles={isMainPage} />
                </atoms.Header>
                <atoms.Main>{children}</atoms.Main>
                <atoms.Footer>
                    <atoms.FooterContent>
                        <span>© Ruslan Abramov, {new Date().getFullYear()}</span>
                        <Contacts />
                        <span>
                            <span>Found an issues? </span>
                            <a
                                href="https://github.com/snak1t/personal_blog/issues/new"
                                target="__blank"
                                rel="noreferrer noopener nofollow"
                            >
                                Submit please.
                            </a>
                        </span>
                    </atoms.FooterContent>
                </atoms.Footer>
                {hideStickyContact ? null : <ContactsShort />}
            </atoms.LayoutContainer>
        </>
    )
}
