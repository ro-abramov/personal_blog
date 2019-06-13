import styled from "styled-components"
import { cssConstants, colors } from "../../utils/css/mixins"

export const CardTitle = styled.h3`
  padding: 0.5rem 0;
  margin: 0;
  color: inherit;
  font-size: 0.9rem;
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

export const CardImageWrapper = styled.div`
  margin: -3rem 0.6rem 0;
  width: calc(100% - 1.2rem);
  box-shadow: ${cssConstants.boxShadow};
  border-radius: ${cssConstants.borderRadius};
  display: inline-flex;
  transition: all 150ms ease-in-out;
  &:hover {
    box-shadow: ${cssConstants.boxShadowLarge};
    transform: translateY(-0.3rem);
  }
  & * {
    display: block;
    width: 100%;
    margin-bottom: 0;
    border-radius: ${cssConstants.borderRadius};
  }
`

export const CardImage = styled.img``

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
    color: ${({ dark }) => (dark ? colors.light : colors.shade)};
  }
`
