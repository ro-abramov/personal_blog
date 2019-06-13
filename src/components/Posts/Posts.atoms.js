import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { colors } from '../../utils/css/mixins'

export const WrapperLink = styled(Link)`
    text-decoration: none;
`

export const PostsList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    padding: 0;
    margin: 0;
    list-style: none;
    padding-top: 3rem;
`

export const PostImage = styled(Image)`
    width: 100%;
`

export const Post = styled.li`
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;
`

export const PostInfo = styled.span`
    color: ${colors.secondary};
    font-weight: bold;
`
