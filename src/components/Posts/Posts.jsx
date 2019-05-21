import React from "react"
import { Link } from "gatsby"
import {
  PostImage,
  Post,
  PostsList,
  PostArticle,
  PostHeader,
  PostContent,
  PostTitle,
} from "./atoms"

export const Posts = ({ posts }) => {
  return (
    <PostsList>
      {posts.map(({ node }) => (
        <Post key={node.fields.slug}>
          <Link to={node.fields.slug}>
            <PostArticle>
              <PostImage
                fluid={node.frontmatter.cover.childImageSharp.fluid}
                alt={node.frontmatter.title}
              />
              <PostContent>
                <PostHeader>
                  <PostTitle>{node.frontmatter.title}</PostTitle>
                  <span>{node.frontmatter.date}</span>
                </PostHeader>
                <p>{node.excerpt}</p>
              </PostContent>
            </PostArticle>
          </Link>
        </Post>
      ))}
    </PostsList>
  )
}
