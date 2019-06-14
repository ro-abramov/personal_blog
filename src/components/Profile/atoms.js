import styled from 'styled-components'
import { cssConstants, colors, centerContent, breakpoints } from '../../utils/css/mixins'

export const ProfileContainer = styled.article`
    background-color: ${colors.fullDark};
    padding: 4rem 1rem;
    color: ${colors.light};
    &:after {
        content: '';
        display: table;
        clear: both;
    }
`

export const ProfileWrapper = styled.div`
    ${centerContent({ topMargin: 0 })}
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
    font-size: 1.2rem;
    ${breakpoints.mobile} {
        display: block;
        text-align: center;
    }
`

export const ProfileSummary = styled.p`
    font-size: 1rem;
`
