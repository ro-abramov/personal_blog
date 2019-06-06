import React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import { Timeline } from "../components/Timeline/Timeline"
import { Profile } from "../components/Profile"

function About() {
  return (
    <Layout>
      <SEO title="About me" />
      <Profile />
      <Timeline />
    </Layout>
  )
}

export default About
