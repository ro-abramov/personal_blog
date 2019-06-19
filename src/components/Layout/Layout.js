import React from 'react'

import { Header } from '../Header'
import { useSiteMetaData } from '../../hooks/useSiteMetaData'
import { ContactsShort } from '../Contacts'
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
                <atoms.Footer>© Ruslan Abramov, {new Date().getFullYear()}</atoms.Footer>
                {hideStickyContact ? null : <ContactsShort />}
            </atoms.LayoutContainer>
        </>
    )
}
