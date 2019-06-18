import styled from 'styled-components'
import { cssConstants, colors, breakpoints } from '../../utils/css/mixins'

export const TimelineContainer = styled.ul`
    padding: 0;
    list-style: none;
    position: relative;
    margin: 0;
    &:before {
        position: absolute;
        width: 0.4rem;
        left: calc(50% - 0.2rem);
        background: linear-gradient(0deg, ${colors.light}, ${colors.secondary});
        top: 0.5rem;
        height: calc(100% - 0.5rem);
        content: '';
        display: block;
        ${breakpoints.mobile} {
            left: 0.2rem;
        }
    }
`

export const TimelineInfoBox = styled.article`
    width: calc(50% - 4rem);
    color: ${colors.shade} !important;
    background-color: #fff;
    border-radius: 4px;
    padding: 1rem;
    position: relative;
    box-shadow: ${cssConstants.boxShadow};
    ${breakpoints.mobile} {
        width: 100%;
    }
    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 1rem;
        width: 0;
        height: 0;
        border: 0.4rem solid transparent;
        right: 100%;
        left: auto;
        border-left-color: transparent;
        border-right-color: #fff;
    }
`

export const TimelineElement = styled.li`
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
    flex-direction: row-reverse;
    ${breakpoints.mobilePlus} {
        &:nth-child(even) {
            flex-direction: row;
            ${TimelineInfoBox}:after {
                left: 100%;
                right: auto;
                border-left-color: #fff;
                border-right-color: transparent;
            }
        }
    }
`

export const TimelineIcon = styled.div`
    position: relative;
    top: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.4rem;
    height: 2.4rem;
    margin: 0 2.8rem;
    background-color: ${colors.light};
    border-radius: 50%;
    box-shadow: ${cssConstants.boxShadowLarge};
    ${breakpoints.mobile} {
        margin: 0;
        flex-shrink: 0;
        left: -0.8rem;
    }
`

export const TimelineInfoTitle = styled.h4`
    margin-bottom: 0.2rem;
`
export const TimelineInfoPosition = styled.span`
    display: inline-block;
    margin-bottom: 0.6rem !important;
`

export const TimelineInfoDescription = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1rem;
`

export const TimelineInfoDutiesList = styled.ul`
    font-size: 0.8rem;
`
export const TimelineInfoDutiesListItem = styled.li``

export const TimelineInfoTechContainer = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
export const TimelineInfoTechTag = styled.li`
    background-color: darkcyan;
    margin: 0.1rem 0.2rem !important;
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
    border-radius: 0.2rem;
    color: #fff;
`

export const TimelineDate = styled.div`
    margin-top: 1rem;
    font-size: 1rem;
    color: #5c5c5c;

    ${breakpoints.mobile} {
        display: none;
    }
`
