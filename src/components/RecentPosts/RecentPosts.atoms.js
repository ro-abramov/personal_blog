import styled from 'styled-components'
import { Card } from '../Card'
import { breakpoints, colors } from '../../utils/css/mixins'
import { Link } from '../Link'

export const PostCard = styled(Card)`
    ${breakpoints.mobile} {
        margin-bottom: 1rem;
    }
`

export const ReadMore = styled(Link)`
    ${breakpoints.mobile} {
        display: block;
        text-align: center;
        color: ${colors.dark};
    }
`
