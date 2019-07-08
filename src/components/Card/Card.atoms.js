import styled from 'styled-components'
import { cssConstants, colors, breakpoints } from '../../utils/css/mixins'

export const CardTitle = styled.h3`
    padding: 0.4rem 0;
    margin: 0;
    color: inherit;
    font-size: 0.9rem;
`

export const CardDescription = styled.p`
    color: inherit;
    font-size: 0.75rem;
`

export const CardFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    padding: 1rem 2rem;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    ${breakpoints.mobile} {
        padding: 1rem;
    }
`

export const CardWrapper = styled.article`
    background-color: ${({ dark }) => (dark ? colors.fullDark : colors.light)};
    color: ${({ dark }) => (dark ? colors.light : colors.shade)};
    border-radius: ${cssConstants.borderRadius};
    box-shadow: ${cssConstants.boxShadow};
    margin-top: ${({ withPadding }) => (withPadding ? 3 : 0)}rem;
    display: flex;
    flex-direction: column;
    ${CardTitle} {
        color: ${({ dark }) => (dark ? colors.light : colors.shade)};
    }
`
