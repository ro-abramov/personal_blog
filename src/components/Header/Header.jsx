import React from "react"
import * as atoms from "./Header.atoms"

export const Header = ({ siteTitle }) => (
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
            About
          </atoms.StyledLink>
        </atoms.NavLinksItem>
      </atoms.NavLinksList>
    </atoms.NavLinks>
  </atoms.HeaderContainer>
)
