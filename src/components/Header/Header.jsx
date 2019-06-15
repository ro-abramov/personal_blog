import React from 'react'
import * as atoms from './Header.atoms'
import { colors } from '../../utils/css/mixins'
import { Menu } from '../Menu'
import { Link } from '../Link'

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
                <atoms.SiteTitleLink to="/" title={siteTitle} color={colorMap.main} hover={colorMap.hover}>
                    {'${ro_abramov}'}
                </atoms.SiteTitleLink>
            </atoms.SiteTitle>
            <atoms.MenuWrapper>
                <Menu color={colorMap.accent}>
                    <Link to="/" title="Link to Home page">
                        Home
                    </Link>
                    <Link to="/page=1" title="Info about me">
                        Blog
                    </Link>
                    <Link to="/about" title="Info about me">
                        About
                    </Link>
                </Menu>
            </atoms.MenuWrapper>
        </atoms.HeaderContainer>
    )
}
