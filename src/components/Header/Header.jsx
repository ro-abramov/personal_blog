import React from 'react'
import { faHome, faBookReader, faUserSecret } from '@fortawesome/free-solid-svg-icons'

import * as atoms from './Header.atoms'
import { colors } from '../../utils/css/mixins'
import { Menu } from '../Menu'

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
                    <atoms.HeaderMenuLink to="/" title="Home page">
                        <atoms.NavIcon icon={faHome} color={colors.main} title="Home" />
                        <span>Home</span>
                    </atoms.HeaderMenuLink>
                    <atoms.HeaderMenuLink to="/page=1" title="Info about me">
                        <atoms.NavIcon icon={faBookReader} color={colors.main} title="Blog" />
                        <span>Blog</span>
                    </atoms.HeaderMenuLink>
                    <atoms.HeaderMenuLink to="/about" title="Info about me">
                        <atoms.NavIcon icon={faUserSecret} color={colors.main} title="About me" />
                        <span>About me</span>
                    </atoms.HeaderMenuLink>
                </Menu>
            </atoms.MenuWrapper>
        </atoms.HeaderContainer>
    )
}
