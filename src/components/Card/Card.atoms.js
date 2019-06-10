import styled from "styled-components"
import { cssConstants, colors } from "../../utils/css/mixins"

export const CardTitle = styled.h3`
  padding: 0.5rem 0;
  margin: 0;
  color: inherit;
`

export const CardDescription = styled.p`
  color: inherit;
  font-size: 0.7rem;
`

export const CardFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  color: inherit;
  font-size: 0.7rem;
  width: 100%;
`

export const CardImage = styled.img`
  margin: -3rem 0.6rem 0;
  border-radius: ${cssConstants.borderRadius};
  width: calc(100% - 1.2rem);
  box-shadow: ${cssConstants.boxShadowLarge};
`

export const CardContent = styled.div`
  padding: 1rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CardWrapper = styled.article`
  background-color: ${({ dark }) => (dark ? colors.fullDark : colors.light)};
  color: ${({ dark }) => (dark ? colors.light : colors.shade)};
  border-radius: ${cssConstants.borderRadius};
  box-shadow: ${cssConstants.boxShadow};
  ${CardTitle} {
    color: ${({ dark }) => (dark ? colors.light : colors.main)};
  }
`
