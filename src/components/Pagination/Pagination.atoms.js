import styled from 'styled-components'
import { colors } from '../../utils/css/mixins'

export const StyledList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 2rem 0;
    list-style: none;
`

export const StyledListItem = styled.li`
    padding: 0 0.4rem;
    margin: 0 0.1rem;
    font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
    text-decoration: ${({ selected }) => (selected ? 'underline' : 'normal')};
    color: ${({ selected }) => (selected ? colors.main : 'inherit')};
`
