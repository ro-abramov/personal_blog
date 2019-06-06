import React from "react"
import * as atoms from "./atoms"

const Header = ({ siteTitle }) => (
  <atoms.HeaderWrapper>
    <atoms.HeaderContainer>
      <atoms.SiteTitle>
        <atoms.StyledLink to="/" title={siteTitle}>
          {"${ro_abramov}"}
        </atoms.StyledLink>
      </atoms.SiteTitle>
      <atoms.NavLinks>
        <atoms.NavLinksList>
          <atoms.NavLinksItem>
            <atoms.StyledLink to="/about" title="About me">
              about
            </atoms.StyledLink>
          </atoms.NavLinksItem>
        </atoms.NavLinksList>
      </atoms.NavLinks>
    </atoms.HeaderContainer>
  </atoms.HeaderWrapper>
)

export default Header
