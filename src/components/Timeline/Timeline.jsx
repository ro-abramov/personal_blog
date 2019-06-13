import React from 'react'
import { graphql } from 'gatsby'
import format from 'date-fns/format'
import * as atoms from './atoms'
import { useStaticQuery } from 'gatsby'

export function Timeline() {
    const {
        allPastProjectsYaml: { edges: pastProjects },
    } = useStaticQuery(graphql`
        query {
            allPastProjectsYaml {
                edges {
                    node {
                        id
                        duties
                        title
                        type
                        description
                        location
                        position
                        startDate
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
                        <atoms.TimelineDate>{format(pastProject.startDate, 'MMM, YYYY')}</atoms.TimelineDate>
                    </atoms.TimelineElement>
                )
            })}
        </atoms.TimelineContainer>
    )
}
