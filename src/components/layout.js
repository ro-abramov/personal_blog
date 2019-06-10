import React from "react"

import { Header } from "./Header"
import { useSiteMetaData } from "../hooks/useSiteMetaData"
import * as atoms from "./atoms"

export function Layout({ children }) {
  const siteMetadata = useSiteMetaData()
  return (
    <>
      <atoms.GlobalStyles />
      <atoms.LayoutContainer>
        <atoms.Header>
          <Header siteTitle={siteMetadata.title} />
        </atoms.Header>
        <atoms.Main>{children}</atoms.Main>
        <atoms.Footer>
          © Ruslan Abramov, {new Date().getFullYear()}
        </atoms.Footer>
      </atoms.LayoutContainer>
    </>
  )
}
