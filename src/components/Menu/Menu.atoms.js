import styled from 'styled-components'
import { colors, cssConstants, breakpoints } from '../../utils/css/mixins'

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
    padding: 0 6rem 0rem 1rem;
    height: 48px;
    box-shadow: ${cssConstants.boxShadow};
    border-radius: ${cssConstants.borderRadius};
    position: absolute;
    right: 0;
    top: -4px;
    width: max-content;
    display: flex;
    align-items: center;
    ${breakpoints.mobile} {
        padding: 3rem 0 1rem;
        display: block;
        height: auto;
    }
`

export const MenuNavList = styled.ul`
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    ${breakpoints.mobile} {
        flex-direction: column;
    }
`
export const MenuNavListElement = styled.li`
    margin: 0;
`

export const MenuIconSvg = styled.svg`
    width: 40px;
    height: 40px;
    ${breakpoints.mobile} {
        width: 24px;
        height: 24px;
    }
`
