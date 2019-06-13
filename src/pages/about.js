import React from "react"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Timeline } from "../components/Timeline/Timeline"
import { Profile } from "../components/Profile"
import { CenterContent } from "../components/atoms/index"

function About() {
  return (
    <Layout>
      <SEO title="About me" />
      <CenterContent>
        <Profile />
        <Timeline />
      </CenterContent>
    </Layout>
  )
}

export default About
