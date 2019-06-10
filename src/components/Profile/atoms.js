import styled from "styled-components"
import { cssConstants } from "../../utils/css/mixins"

export const ProfileContainer = styled.article`
  margin-bottom: 2rem;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`

export const ProfilePictureContainer = styled.div`
  width: 335px;
  shape-outside: circle(50%);
  float: left;
  display: flex;
  align-items: flex-start;
  justify-content: center;
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
`

export const ProfileSummary = styled.p`
  font-size: 0.9rem;
`
