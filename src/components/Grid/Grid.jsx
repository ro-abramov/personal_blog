import styled from 'styled-components'
import { centerContent, breakpoints } from '../../utils/css/mixins'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${({ columns = `repeat(12, 1fr)` }) => columns};
    grid-auto-rows: ${({ rows = `minmax(5rem, max-content)` }) => rows};
    grid-gap: ${({ gap = `1rem` }) => gap};
    ${centerContent({ topMargin: 2 })};

    ${breakpoints.mobile} {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
    }
`

export const GridElement = styled.div`
    grid-column: ${({ col = 'auto' }) => col};
    grid-row: ${({ row = 'auto' }) => row};
`
