import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/seo'
import { Timeline } from '../components/Timeline/Timeline'
import { Profile } from '../components/Profile'
import { CenterContent } from '../components/CenterContent'
import { TagsCloud } from '../components/TagsCloud'

function About() {
    const {
        allPastProjectsYaml: { edges: pastProjects },
    } = useStaticQuery(graphql`
        query {
            allPastProjectsYaml(sort: { fields: [date], order: DESC }) {
                edges {
                    node {
                        id
                        duties
                        title
                        type
                        description
                        location
                        position
                        date(formatString: "MMM, YYYY")
                        techStack
                    }
                }
            }
        }
    `)
    const [selectedTags, setSelectedTags] = useState(new Set())
    const pushTag = tag => setSelectedTags(prevTags => new Set(prevTags).add(tag))
    const pullTag = tag =>
        setSelectedTags(prevTags => {
            const clonedTagsState = new Set(prevTags)
            clonedTagsState.delete(tag)
            return clonedTagsState
        })
    return (
        <Layout>
            <SEO title="About me" />
            <Profile />
            <CenterContent>
                <TagsCloud
                    pastProjects={pastProjects}
                    selectedTags={selectedTags}
                    onPushTag={pushTag}
                    onPullTag={pullTag}
                />
            </CenterContent>
            <Timeline pastProjects={pastProjects} selectedTags={selectedTags} onPushTag={pushTag} onPullTag={pullTag} />
        </Layout>
    )
}

export default About
