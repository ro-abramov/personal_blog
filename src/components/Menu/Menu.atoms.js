import styled from 'styled-components'
import { colors, cssConstants } from '../../utils/css/mixins'

export const MenuWrapper = styled.div`
    position: relative;
    z-index: 1;
`

export const MenuIconWrapper = styled.button`
    display: block;
    position: relative;
    z-index: 2;
    border: none;
    background-color: transparent;
    outline: none;
`

export const MenuContainer = styled.nav`
    background-color: ${colors.light};
    padding: 3rem 2rem 1rem;
    box-shadow: ${cssConstants.boxShadow};
    border-radius: ${cssConstants.borderRadius};
    position: absolute;
    right: 0;
    top: 0;
    width: max-content;
`

export const MenuNavList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
`
export const MenuNavListElement = styled.li``
