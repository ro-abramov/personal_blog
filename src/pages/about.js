import React from 'react'
import { Layout } from '../components/Layout'
import { SEO } from '../components/seo'
import { Timeline } from '../components/Timeline/Timeline'
import { Profile } from '../components/Profile'
import { CenterContent, SectionTitle } from '../components/atoms/index'

function About() {
    return (
        <Layout>
            <SEO title="About me" />
            <Profile />
            <CenterContent>
                <SectionTitle>My past projects</SectionTitle>
                <Timeline />
            </CenterContent>
        </Layout>
    )
}

export default About
