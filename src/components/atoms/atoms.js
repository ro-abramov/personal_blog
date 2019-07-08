import styled from 'styled-components'
import { colors, breakpoints } from '../../utils/css/mixins'

export const Cover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 37.5rem;
    z-index: -1;
    overflow: hidden;
    ${breakpoints.mobile} {
        height: auto;
    }
    & > * {
        position: relative;
        filter: blur(3px);
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

export const ShortInfo = styled.div`
    color: #fff;
    font-size: 0.8rem;
    ${breakpoints.mobilePlus} {
        font-size: 0.9rem;
    }
`

export const ShortInfoButtonsGroup = styled.div`
    margin: 1rem 0;
    font-size: 0.8rem;
    & > *:first-child {
        margin-right: 1rem;
    }

    ${breakpoints.mobile} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
