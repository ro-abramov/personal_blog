import { Link as GLink } from 'gatsby'

import { Link } from '../Link'
import styled from 'styled-components'
import { colors, breakpoints } from '../../utils/css/mixins'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 1rem;
    ${breakpoints.mobile} {
        padding: 0;
    }
`

export const StyledLink = styled(GLink)`
    text-decoration: none;
    color: ${colors.light};
    &:hover {
        color: ${colors.secondary};
    }
`

export const SiteTitle = styled.h1`
    margin-bottom: 0;
    ${breakpoints.mobile} {
        font-size: 1.2rem;
    }
`

export const SiteTitleLink = styled(StyledLink)`
    color: ${({ color = colors.light }) => color};
    &:hover {
        color: ${({ hoverColor = colors.secondary }) => hoverColor};
    }
`
export const MenuWrapper = styled.div`
    display: flex;
    margin-left: auto;
    align-items: center;
`

export const NavIcon = styled(FontAwesomeIcon)`
    margin-right: 0.2rem;
    & + span {
        font-size: 0.8rem;
        margin-right: 1rem;
        ${breakpoints.mobile} {
            display: none;
        }
    }
`

export const HeaderMenuLink = styled(Link)`
    padding: 0.4rem 1rem;
    display: block;
`
