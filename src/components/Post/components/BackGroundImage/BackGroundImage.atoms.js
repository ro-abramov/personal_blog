import styled from 'styled-components'
import { colors, breakpoints } from '../../../../utils/css/mixins'
import { CenterContent } from '../../../CenterContent'

export const BackGroundImageWrapper = styled.div`
    position: relative;
    height: 30rem;
    overflow: hidden;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${breakpoints.mobile} {
        height: 15rem;
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
