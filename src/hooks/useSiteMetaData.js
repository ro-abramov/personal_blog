import { useStaticQuery, graphql } from "gatsby"

export function useSiteMetaData() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return site.siteMetadata
}
