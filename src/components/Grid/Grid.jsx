import styled from 'styled-components'
import { breakpoints } from '../../utils/css/mixins'
import { CenterContent } from '../CenterContent'

export const Grid = styled(CenterContent)`
    display: grid;
    grid-template-columns: ${({ columns = `repeat(12, 1fr)` }) => columns};
    grid-auto-rows: ${({ rows = `minmax(5rem, max-content)` }) => rows};
    grid-gap: ${({ gap = `1rem` }) => gap};
    margin: 2rem auto;

    ${breakpoints.mobile} {
        display: flex;
        flex-direction: column;
    }
`

export const GridElement = styled.div`
    grid-column: ${({ col = 'auto' }) => col};
    grid-row: ${({ row = 'auto' }) => row};
`
