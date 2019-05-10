import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { useSiteMetaData } from "../hooks/useSiteMetaData"

function Layout({ children }) {
  const siteMetadata = useSiteMetaData()
  return (
    <>
      <Header siteTitle={siteMetadata.title} />
      <main>{children}</main>
      <footer>© Ruslan Abramov, {new Date().getFullYear()}</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
