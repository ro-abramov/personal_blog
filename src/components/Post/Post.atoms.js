import styled from 'styled-components'
import { colors, centerContent } from '../../utils/css/mixins'

export const PostInfoTitle = styled.h1`
    font-size: 2.2rem;
    color: ${colors.light};
`

export const PostContent = styled.div`
    ${centerContent({ topMargin: 2 })}
`
