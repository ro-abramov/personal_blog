import React from "react"
import * as Atoms from "./atoms"

const Header = ({ siteTitle }) => (
  <Atoms.HeaderWrapper>
    <Atoms.HeaderContainer>
      <Atoms.SiteTitle>
        <Atoms.StyledLink to="/" title={siteTitle}>
          {"${ro_abramov}"}
        </Atoms.StyledLink>
      </Atoms.SiteTitle>
    </Atoms.HeaderContainer>
  </Atoms.HeaderWrapper>
)

export default Header
