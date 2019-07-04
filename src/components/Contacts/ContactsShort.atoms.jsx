import styled from 'styled-components'
import { colors, breakpoints, calculateColorDifference } from '../../utils/css/mixins'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const transitColor = calculateColorDifference(colors.fullDark, colors.light)

export const ContactsShortContainer = styled.section`
    position: fixed;
    left: 0.4rem;
    top: 20vh;
    font-size: 0.8rem;
    z-index: 1;
    mix-blend-mode: difference;
    color: ${transitColor};
    ${breakpoints.mobile} {
        left: 0.1rem;
        font-size: 0.6rem;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: inline-flex;
        writing-mode: vertical-lr;
        transform: rotate(180deg);
    }
`

export const ContactsShortElement = styled.li`
    margin: 0 0 0.6rem 0;
    padding-bottom: 0.6rem;
    position: relative;
    &:after {
        content: ' ';
        position: absolute;
        width: 12px;
        height: 1px;
        background-color: ${transitColor};
        bottom: 0rem;
        right: 0.2rem;
        transform: rotate(30deg);
        ${breakpoints.mobilePlus} {
            width: 16px;
        }
    }
    a {
        color: inherit;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        &:hover {
            color: inherit;
        }
    }
    &:last-child {
        margin-bottom: 0;
        &:after {
            display: none;
        }
    }
`

export const ContactsShortIcon = styled(FontAwesomeIcon)`
    transform: rotate(90deg);
    margin-bottom: 0.4rem;
`
