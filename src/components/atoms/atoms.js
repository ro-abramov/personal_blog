import styled from "styled-components"
import { Link } from "gatsby"
import { colors, centerContent } from "../../utils/css/mixins"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(5rem, max-content);
  grid-gap: 1rem;
  ${centerContent({ topMargin: 0 })};
`

export const GridElement = styled.div`
  grid-column: ${({ col = "auto" }) => col};
  grid-row: ${({ row = "auto" }) => row};
`

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 37.5rem;
  z-index: -1;
  overflow: hidden;
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
    content: "";
    background-color: ${colors.shade};
    opacity: 0.7;
  }
`

export const ShortInfo = styled.div`
  color: #fff;
`

export const AccentLink = styled(Link)`
  color: ${colors.accent};
  text-decoration: none;
  &:hover {
    color: ${colors.secondary};
  }
`

export const ShortInfoButtonsGroup = styled.div`
  margin: 1rem 0;

  ${AccentLink} {
    margin-left: 1rem;
  }
`

export const SectionTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-size: 2rem;
  color: ${colors.shade};
  margin: 2rem 0 2rem;
`

export const VideoSectionTitle = styled(SectionTitle)`
  margin-bottom: 4rem;
`
