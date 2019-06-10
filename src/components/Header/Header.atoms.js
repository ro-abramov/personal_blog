import { Link } from "gatsby"
import styled from "styled-components"
import { colors } from "../../utils/css/mixins"

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
`

export const SiteTitleLink = styled(StyledLink)`
  color: ${({ color = colors.light }) => color};
  &:hover {
    color: ${({ hoverColor = colors.secondary }) => hoverColor};
  }
`

export const NavLinks = styled.nav`
  display: flex;
  margin-left: auto;
  align-items: center;
`

export const NavLinksList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  & > li:last-child {
    margin-bottom: 0;
  }
`

export const NavLinksItem = styled.li`
  margin-left: 1rem;
  ${StyledLink} {
    color: ${colors.accent};
    font-weight: bold;
    font-size: 1rem;
    &:hover {
      color: ${colors.secondary};
    }
  }
`
