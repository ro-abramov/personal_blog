import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Card } from '../Card'
import { breakpoints, colors } from '../../utils/css/mixins'

export const VideoCard = styled(Card)`
    ${breakpoints.mobile} {
        margin-bottom: 1rem;
    }
`

export const VideoImageWrapper = styled.div`
    position: relative;
`

export const VideoPlayIcon = styled(FontAwesomeIcon)`
    position: absolute;
    z-index: 1;
    top: calc(50% - 1rem);
    left: calc(50% - 1rem);
    color: ${colors.main};
    background-color: #fff;
    border-radius: 50%;
    font-size: 2rem;
    opacity: 0;
    transition: opacity 150ms ease-in-out;
`

export const VideoLink = styled.a`
    text-decoration: none;
    &:hover {
        ${VideoPlayIcon} {
            opacity: 1;
        }
    }
`
