import styled from "styled-components"
import { colors, cssConstants } from "../../utils/css/mixins"

export const StyledButton = styled.button`
  border: none;
  border-radius: 2px;
  color: ${colors.light};
  background-color: ${colors.main};
  padding: 0.4rem 1.2rem;
  cursor: pointer;
  box-shadow: ${cssConstants.boxShadow};
  transition: box-shadow 0.2s ease-in-out;
  &:hover,
  &:focus {
    box-shadow: ${cssConstants.boxShadowLarge};
  }
`
