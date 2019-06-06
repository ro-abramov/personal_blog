import styled from "styled-components"
import { cssConstants } from "../../utils/css/mixins"

export const TimelineContainer = styled.ul`
  padding: 0;
  list-style: none;
  position: relative;
  &:before {
    position: absolute;
    width: 0.4rem;
    left: calc(50% - 0.2rem);
    background: linear-gradient(0deg, #bfffb4, #c4b4f7);
    top: 0.5rem;
    height: calc(100% - 0.5rem);
    content: "";
    display: block;
  }
`

export const TimelineInfoBox = styled.article`
  width: calc(50% - 4rem);
  background-color: #fff;
  border-radius: 4px;
  padding: 1rem;
  position: relative;
  box-shadow: ${cssConstants.boxShadow};
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 100%;
    top: 1rem;
    width: 0;
    height: 0;
    border: 0.4rem solid transparent;
    border-left-color: #fff;
  }
`

export const TimelineElement = styled.li`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
  &:nth-child(even) {
    flex-direction: row-reverse;
    ${TimelineInfoBox}:after {
      right: 100%;
      left: auto;
      border-left-color: transparent;
      border-right-color: #fff;
    }
  }
`

export const TimelineIcon = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 50%;
  position: relative;
  top: 0.5rem;
  margin: 0 2.8rem;
  border: 2px solid hsl(266, 81%, 36%);
  background-color: hsl(266, 62%, 55%);
  background-image: url("/icons/project.svg");
  background-size: 1.4rem auto;
  background-position: center center;
  background-repeat: no-repeat;
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
`
