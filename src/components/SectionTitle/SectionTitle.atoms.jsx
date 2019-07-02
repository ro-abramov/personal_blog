import styled from 'styled-components'
import { colors, breakpoints } from '../../utils/css/mixins'

export const SectionTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    color: ${({ light = false }) => (light ? colors.light : colors.shade)};
    font-size: 1.6rem;
    margin: 1.6rem 0;
    ${breakpoints.mobilePlus} {
        font-size: 2rem;
        margin: 2rem 0;
    }
`
