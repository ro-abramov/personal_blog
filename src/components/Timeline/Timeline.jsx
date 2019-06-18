import React from 'react'
import { graphql } from 'gatsby'
import * as atoms from './Timeline.atoms'
import { useStaticQuery } from 'gatsby'

export function Timeline() {
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
                        date(formatString: "MM/DD/YYYY")
                        techStack
                    }
                }
            }
        }
    `)

    return (
        <atoms.TimelineContainer>
            {pastProjects.map(({ node: pastProject }) => {
                return (
                    <atoms.TimelineElement key={pastProject.id}>
                        <atoms.TimelineInfoBox>
                            <header>
                                <atoms.TimelineInfoTitle>{pastProject.title}</atoms.TimelineInfoTitle>
                                <atoms.TimelineInfoPosition>{pastProject.position}</atoms.TimelineInfoPosition>
                            </header>
                            <atoms.TimelineInfoDescription>{pastProject.description}</atoms.TimelineInfoDescription>
                            <atoms.TimelineInfoDutiesList>
                                {pastProject.duties &&
                                    pastProject.duties.map(duty => (
                                        <atoms.TimelineInfoDutiesListItem key={duty}>
                                            {duty}
                                        </atoms.TimelineInfoDutiesListItem>
                                    ))}
                            </atoms.TimelineInfoDutiesList>
                            <atoms.TimelineInfoTechContainer>
                                {pastProject.techStack &&
                                    pastProject.techStack.map(tech => (
                                        <atoms.TimelineInfoTechTag key={tech}>{tech}</atoms.TimelineInfoTechTag>
                                    ))}
                            </atoms.TimelineInfoTechContainer>
                        </atoms.TimelineInfoBox>
                        <atoms.TimelineIcon />
                        <atoms.TimelineDate>{pastProject.date}</atoms.TimelineDate>
                    </atoms.TimelineElement>
                )
            })}
        </atoms.TimelineContainer>
    )
}
