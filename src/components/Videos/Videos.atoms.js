import styled from 'styled-components'
import { Card } from '../Card'
import { breakpoints } from '../../utils/css/mixins'

export const VideoCard = styled(Card)`
    ${breakpoints.mobile} {
        margin-bottom: 1rem;
    }
`
