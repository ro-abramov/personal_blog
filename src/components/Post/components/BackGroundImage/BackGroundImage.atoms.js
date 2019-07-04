import styled from 'styled-components'
import { colors, breakpoints } from '../../../../utils/css/mixins'
import { CenterContent } from '../../../CenterContent'

export const BackGroundImageWrapper = styled.div`
    position: relative;
    min-height: 15rem;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${breakpoints.mobilePlus} {
        min-height: 30rem;
    }
`

export const BackGroundImagePicture = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    & > * {
        position: relative;
        filter: blur(3px);
        height: 100%;
    }
    &:after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        bottom: 0;
        content: '';
        background-color: ${colors.shade};
        opacity: 0.7;
    }
`

export const BackGroundImageContainer = styled(CenterContent)`
    color: #fff;
    margin: 0 auto;
`

export const BackGroundImageLink = styled.a`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: ${colors.light};
    text-decoration: none;
    padding: 0.2rem 0.3rem;
    font-family: -apple-system, BlinkMacSystemFont, 'San Francisco', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto,
        'Segoe UI', Arial, sans-serif;
    font-size: 0.6rem;
    font-weight: bold;
    line-height: 1.2;
    display: inline-block;
    border-radius: 3px;
    span {
        display: inline-block;
        padding: 2px 3px;
    }
    svg {
        height: 0.6rem;
        width: auto;
        position: relative;
        vertical-align: middle;
        top: -2px;
        fill: white;
    }
    &:hover {
        svg {
            fill: ${colors.mainActive};
        }
    }
`
