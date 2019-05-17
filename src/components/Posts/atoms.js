import Image from "gatsby-image"
import styled from "styled-components"

export const PostsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

export const PostImage = styled(Image)`
  width: 300px;
`

export const Post = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
`

export const PostArticle = styled.article`
  display: flex;
`

export const PostHeader = styled.header``

export const PostTitle = styled.h4`
  margin-right: 1rem;
  margin-bottom: 0.6rem;
`

export const PostContent = styled.header`
  margin-left: 1rem;
`
