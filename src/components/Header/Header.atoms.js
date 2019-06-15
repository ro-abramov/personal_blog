import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors, breakpoints } from '../../utils/css/mixins'

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 1rem;
`

export const StyledLink = styled(Link)`
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
