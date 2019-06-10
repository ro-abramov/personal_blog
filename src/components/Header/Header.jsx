import React from "react"
import * as atoms from "./Header.atoms"
import { colors } from "../../utils/css/mixins"

const headerColors = new Map([
  [
    true,
    {
      main: colors.light,
      hover: colors.secondary,
      accent: colors.accent,
    },
  ],
  [
    false,
    {
      main: colors.main,
      hover: colors.secondary,
      accent: colors.shade,
    },
  ],
])

export const Header = ({ siteTitle, inLightStyles }) => {
  const colorMap = headerColors.get(inLightStyles)
  return (
    <atoms.HeaderContainer>
      <atoms.SiteTitle>
        <atoms.SiteTitleLink
          to="/"
          title={siteTitle}
          color={colorMap.main}
          hover={colorMap.hover}
        >
          {"${ro_abramov}"}
        </atoms.SiteTitleLink>
      </atoms.SiteTitle>
      <atoms.NavLinks>
        <atoms.NavLinksList>
          <atoms.NavLinksItem>
            <atoms.NavLink
              color={colorMap.accent}
              hover={colorMap.hover}
              to="/about"
              title="About me"
            >
              About
            </atoms.NavLink>
          </atoms.NavLinksItem>
        </atoms.NavLinksList>
      </atoms.NavLinks>
    </atoms.HeaderContainer>
  )
}
