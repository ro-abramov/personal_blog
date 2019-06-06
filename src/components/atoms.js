import { Link } from "gatsby"
import styled from "styled-components"
import { centerContent, colors } from "../utils/css/mixins"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f4f5f7;
`

export const Main = styled.main`
  flex: 1;
  ${centerContent({ topMargin: 2 })};
`

export const Footer = styled.footer`
  flex-shrink: 0;
  padding: 0.4rem;
  ${centerContent({ topMargin: 0 })};
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${colors.main};
`

export const HeaderWrapper = styled.header`
  padding: 0.4rem;
  box-shadow: 0 0 5px #00000021;
  flex-shrink: 0;
  background-color: #fff;
`

export const HeaderContainer = styled.div`
  ${centerContent({ topMargin: 0 })};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const SiteTitle = styled.h1`
  margin-bottom: 0;
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
`
