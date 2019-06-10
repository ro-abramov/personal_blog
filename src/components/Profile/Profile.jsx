import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import * as atoms from "./atoms"

export function Profile() {
  const {
    file: { childImageSharp: image },
  } = useStaticQuery(
    graphql`
      query {
        file(base: { eq: "me.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return (
    <atoms.ProfileContainer>
      <atoms.ProfilePictureContainer>
        <atoms.ProfilePicture>
          <Image fluid={image.fluid} alt="This is me" />
        </atoms.ProfilePicture>
      </atoms.ProfilePictureContainer>
      <atoms.ProfileDescriptionContainer>
        <atoms.ProfileNameWrapper>
          <atoms.ProfileName>
            <span role="img" aria-label="In English">
              🇺🇸
            </span>
            󠁧󠁢󠁥󠁮󠁧󠁿 Ruslan Abramov
          </atoms.ProfileName>
          <atoms.ProfileName>
            <span role="img" aria-label="In Russian">
              🇷🇺
            </span>
            󠁧󠁢󠁥󠁮󠁧󠁿 Руслан Абрамов
          </atoms.ProfileName>
        </atoms.ProfileNameWrapper>
        <atoms.ProfileSummary>
          Software engineer with 5+ years of experience in web development with
          primary focus in frontend development with React library. Have an
          experience in setting up and implementing initial architecture of a
          web application.
        </atoms.ProfileSummary>
        <atoms.ProfileSummary>
          Improve load-time performance of web pages. Lead a team of developers.
        </atoms.ProfileSummary>
        <atoms.ProfileSummary>
          Gave talks on technical conferences on several topics connected to web
          development with React library. Have an experience in mentoring and
          conducting lectures both local (state universities and remote). Take
          active participation in local front-end community.
        </atoms.ProfileSummary>
      </atoms.ProfileDescriptionContainer>
    </atoms.ProfileContainer>
  )
}
