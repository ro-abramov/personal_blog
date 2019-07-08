import styled from 'styled-components'
import { cssConstants, colors, breakpoints } from '../../utils/css/mixins'
import { CenterContent } from '../CenterContent'

export const ProfileContainer = styled.section`
    background-color: ${colors.fullDark};
    padding: 2rem 0 3rem;
    color: ${colors.light};
    &:after {
        content: '';
        display: table;
        clear: both;
    }
`

export const ProfileWrapper = styled(CenterContent)`
    margin: 0 auto;
`

export const ProfilePictureContainer = styled.div`
    width: 335px;
    shape-outside: circle(50%);
    float: left;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    ${breakpoints.mobile} {
        float: none;
        margin: 0 0 1rem;
        width: 100%;
    }
`
export const ProfilePicture = styled.div`
    width: calc(335px - 2rem);
    border-radius: 50%;
    overflow: hidden;
    box-shadow: ${cssConstants.boxShadow};
`

export const ProfileDescriptionContainer = styled.div``

export const ProfileNameWrapper = styled.header`
    margin-bottom: 0.4rem;
`

export const ProfileName = styled.span`
    display: inline-block;
    margin-right: 1rem;
    font-size: 1rem;
    ${breakpoints.mobile} {
        display: block;
        text-align: center;
    }
`

export const ProfileSummary = styled.p`
    font-size: 0.9rem;
`
