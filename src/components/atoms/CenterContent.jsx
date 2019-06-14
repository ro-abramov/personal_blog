import styled from 'styled-components'
import { centerContent, breakpoints } from '../../utils/css/mixins'

export const CenterContent = styled.div`
    ${centerContent({ topMargin: 0 })};
    ${breakpoints.mobile} {
        padding: 0 1rem;
    }
`
