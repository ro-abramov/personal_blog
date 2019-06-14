import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../utils/css/mixins'

const linkTypes = {
    default: {
        color: 'inherit',
        hover: 'inherit',
    },
    accent: {
        color: colors.accent,
        hover: colors.secondary,
    },
}

export const StyledLink = styled(Link)`
    color: ${({ type }) => linkTypes[type].color};
    text-decoration: none;
    &:hover {
        color: ${({ type }) => linkTypes[type].hover};
    }
`
