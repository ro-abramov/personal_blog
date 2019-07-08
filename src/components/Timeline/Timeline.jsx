import React, { useMemo } from 'react'
import * as atoms from './Timeline.atoms'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../utils/css/mixins'
import { SectionTitle } from '../SectionTitle'
import { CenterContent } from '../CenterContent'
import { Tag } from '../TagsCloud'

export function Timeline({ pastProjects, selectedTags, onPullTag, onPushTag }) {
    const projectsToShow = useMemo(() => {
        if (selectedTags.size === 0) {
            return pastProjects
        }
        return pastProjects.filter(({ node: pastProject }) => {
            return (
                pastProject.techStack &&
                pastProject.techStack.some(techStack => selectedTags.has(techStack.name.toLowerCase()))
            )
        })
    }, [pastProjects, selectedTags])
    return (
        <atoms.TimelineSectionWrapper>
            <CenterContent>
                <SectionTitle light>My past projects</SectionTitle>
                <atoms.TimelineContainer>
                    {projectsToShow.map(({ node: pastProject }) => {
                        return (
                            <atoms.TimelineElement key={pastProject.id}>
                                <atoms.TimelineInfoBox>
                                    <header>
                                        <atoms.TimelineInfoTitle>{pastProject.title}</atoms.TimelineInfoTitle>
                                        <atoms.TimelineInfoPosition>{pastProject.position}</atoms.TimelineInfoPosition>
                                    </header>
                                    <atoms.TimelineInfoDescription>
                                        {pastProject.description}
                                    </atoms.TimelineInfoDescription>
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
                                            pastProject.techStack.map(tech => {
                                                const techStack = tech.name.toLowerCase()

                                                return (
                                                    <atoms.TimelineInfoTechTag key={techStack}>
                                                        <Tag
                                                            tag={techStack}
                                                            selectedTags={selectedTags}
                                                            onPullTag={onPullTag}
                                                            onPushTag={onPushTag}
                                                            color={tech.textColor}
                                                            backgroundColor={tech.color}
                                                        >
                                                            #{techStack}
                                                        </Tag>
                                                    </atoms.TimelineInfoTechTag>
                                                )
                                            })}
                                    </atoms.TimelineInfoTechContainer>
                                </atoms.TimelineInfoBox>
                                <atoms.TimelineIcon>
                                    <FontAwesomeIcon icon={faCogs} color={colors.main} />
                                </atoms.TimelineIcon>
                                <atoms.TimelineDate>{pastProject.date}</atoms.TimelineDate>
                            </atoms.TimelineElement>
                        )
                    })}
                </atoms.TimelineContainer>
            </CenterContent>
        </atoms.TimelineSectionWrapper>
    )
}
