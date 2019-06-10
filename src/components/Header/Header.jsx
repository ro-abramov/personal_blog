import React from "react"
import * as atoms from "./Header.atoms"

export const Header = ({ siteTitle, inLightStyles }) => (
  <atoms.HeaderContainer>
    <atoms.SiteTitle>
      <atoms.SiteTitleLink to="/" title={siteTitle}>
        {"${ro_abramov}"}
      </atoms.SiteTitleLink>
    </atoms.SiteTitle>
    <atoms.NavLinks>
      <atoms.NavLinksList>
        <atoms.NavLinksItem>
          <atoms.StyledLink to="/about" title="About me">
            About
          </atoms.StyledLink>
        </atoms.NavLinksItem>
      </atoms.NavLinksList>
    </atoms.NavLinks>
  </atoms.HeaderContainer>
)
