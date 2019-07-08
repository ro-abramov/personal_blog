import styled from 'styled-components'
import { colors, cssConstants, breakpoints } from '../../utils/css/mixins'

export const StyledButton = styled.button`
    display: inline-block;
    border: none;
    font-size: 0.8rem;
    border-radius: 2px;
    color: ${({ variant }) => (variant === 'accent' ? colors.shade : colors.light)};
    background-color: ${({ variant }) => (variant === 'default' ? colors.main : colors[variant])};
    padding: 0.4rem 1.2rem;
    cursor: pointer;
    box-shadow: ${cssConstants.boxShadow};
    transition: box-shadow 0.2s ease-in-out;
    text-decoration: none;
    &:hover,
    &:focus {
        box-shadow: ${cssConstants.boxShadowLarge};
        color: ${colors.light};
    }

    ${breakpoints.mobile} {
        padding: 0.4rem 0.8rem;
    }
`
