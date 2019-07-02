import React from 'react'
import * as atoms from './Timeline.atoms'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { colors } from '../../utils/css/mixins'
import { SectionTitle } from '../SectionTitle'
import { CenterContent } from '../CenterContent'
import { Button } from '../Button'

export function Timeline({ pastProjects }) {
    return (
        <atoms.TimelineSectionWrapper>
            <CenterContent>
                <SectionTitle light>My past projects</SectionTitle>
                <atoms.TimelineContainer>
                    {pastProjects.map(({ node: pastProject }) => {
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
                                            pastProject.techStack.map(tech => (
                                                <atoms.TimelineInfoTechTag key={tech}>
                                                    <Button>#{tech.toLowerCase()}</Button>
                                                </atoms.TimelineInfoTechTag>
                                            ))}
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
