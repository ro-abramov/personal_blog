import React, { useMemo, useState } from 'react'
import { differenceInDays } from 'date-fns'
import { SectionTitle } from '../SectionTitle'
import * as atoms from './TagsClound.atoms'
import { Tag } from './Tag'

function getAllTechStack(stacks) {
    const allStackMap = new Map()
    const copiedStacks = stacks.slice().reverse()
    copiedStacks.forEach(({ node: project }, index) => {
        project.techStack.forEach(({ name, color, textColor }) => {
            const techStackTag = name.trim().toLowerCase()
            const nextElement = copiedStacks[index + 1]
            const endDate = nextElement ? new Date(nextElement.node.date) : new Date()
            if (!allStackMap.has(techStackTag)) {
                allStackMap.set(techStackTag, { startFrom: new Date(project.date), endDate, color, textColor })
            } else {
                const prevElement = allStackMap.get(techStackTag)
                allStackMap.set(techStackTag, { startFrom: prevElement.startFrom, endDate, color, textColor })
            }
        })
    })
    return allStackMap
}

const applyTagWeights = ({ duration, actuality }) => stacksMap => {
    let weightedMap = new Map()
    for (const [key, config] of stacksMap.entries()) {
        const totalUseDays = differenceInDays(config.endDate, config.startFrom)
        const actualityDate = differenceInDays(new Date(), config.endDate)
        const isStartedThisYear = config.startFrom.getFullYear() === new Date().getFullYear()
        const yearsOfUse = Math.max(1, Math.floor(totalUseDays / 365))
        const weigh = totalUseDays * duration - actualityDate * (isStartedThisYear ? 0 : actuality)
        weightedMap.set(key, { ...config, weigh, yearsOfUse })
    }
    return weightedMap
}

const sortTechStack = techStack => Array.from(techStack).sort((c1, c2) => c2[1].weigh - c1[1].weigh)

export function TagsCloud({ pastProjects, selectedTags, onPushTag, onPullTag }) {
    const tags = useMemo(
        () => sortTechStack(applyTagWeights({ duration: 4, actuality: 3 })(getAllTechStack(pastProjects))),
        [pastProjects],
    )
    const [isOpened, setIsOpened] = useState(false)
    const tagsToRender = isOpened ? tags : tags.slice(0, 6)
    return (
        <>
            <SectionTitle>Stuff that I knew</SectionTitle>
            <atoms.TagsList>
                {tagsToRender.map(([tag, tagConfig]) => {
                    return (
                        <atoms.TagsElement key={tag}>
                            <Tag
                                onPullTag={onPullTag}
                                onPushTag={onPushTag}
                                selectedTags={selectedTags}
                                tag={tag}
                                color={tagConfig.textColor}
                                backgroundColor={tagConfig.color}
                            >
                                #{tag} ({tagConfig.yearsOfUse}y)
                            </Tag>
                        </atoms.TagsElement>
                    )
                })}
                {!isOpened ? (
                    <atoms.TagsSeeAllButton onClick={() => setIsOpened(true)}>See all</atoms.TagsSeeAllButton>
                ) : null}
            </atoms.TagsList>
        </>
    )
}
