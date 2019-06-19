import { Link } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from '../../utils/css/mixins'

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${colors.light};
    color: ${colors.shade} !important;
    overflow-x: hidden;
  }
`

export const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${colors.light};
`

export const Header = styled.header`
    flex-shrink: 0;
    padding: 0.4rem 1rem;
    z-index: 2;
`

export const Main = styled.main`
    flex-grow: 1;
    z-index: 1;
`

export const Footer = styled.footer`
    flex-shrink: 0;
    padding: 0.4rem;
    padding-top: 140rem;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${colors.light};
    &:hover {
        color: ${colors.secondary};
    }
`
