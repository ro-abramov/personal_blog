import styled from 'styled-components'
import { colors } from '../../../../utils/css/mixins'

export const BackGroundImageWrapper = styled.div`
    position: relative;
    height: 30rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const BackGroundImagePicture = styled.div`
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    & > * {
        top: -20%;
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

export const BackGroundImageContainer = styled.div`
    color: #fff;
`
