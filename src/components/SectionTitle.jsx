import styled from 'styled-components'
import { colors } from '../utils/css/mixins'

export const SectionTitle = styled.h2`
    text-align: center;
    text-transform: uppercase;
    font-size: 2rem;
    color: ${({ light = false }) => (light ? colors.light : colors.shade)};
    margin: 2rem 0 2rem;
`
