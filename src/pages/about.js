import React from "react"
import Layout from "../components/layout"
import { SEO } from "../components/seo"
import { Timeline } from "../components/Timeline/Timeline"

function About() {
  return (
    <Layout>
      <SEO title="About me" />
      <Timeline />
    </Layout>
  )
}

export default About
