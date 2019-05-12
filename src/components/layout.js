import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { useSiteMetaData } from "../hooks/useSiteMetaData"
import * as Atoms from "./atoms"

function Layout({ children }) {
  const siteMetadata = useSiteMetaData()
  return (
    <Atoms.Wrapper>
      <Header siteTitle={siteMetadata.title} />
      <Atoms.Main>{children}</Atoms.Main>
      <Atoms.Footer>© Ruslan Abramov, {new Date().getFullYear()}</Atoms.Footer>
    </Atoms.Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
