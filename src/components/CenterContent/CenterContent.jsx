import styled from 'styled-components'
import { centerContent, breakpoints } from '../../utils/css/mixins'

export const CenterContent = styled.div`
    ${centerContent({ topMargin: 0 })};
    padding: 0 1rem;
    ${breakpoints.mobilePlus} {
        padding: 0 1.6rem;
    }
`
