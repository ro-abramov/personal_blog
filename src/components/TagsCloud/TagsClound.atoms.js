import styled from 'styled-components'
import { colors } from '../../utils/css/mixins'
export const TagsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 2rem 0;
    list-style: none;
`

export const TagsElement = styled.li`
    padding: 0.2rem;
    font-size: 0.8rem;
    margin: 0;
`

export const TagsSeeAllButton = styled.button`
    border: none;
    color: ${colors.main};
    cursor: pointer;
    font-size: 0.9rem;
    background-color: transparent;
    &:hover,
    &:focus {
        color: ${colors.mainActive};
    }
`
