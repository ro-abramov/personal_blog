import React, { useMemo, useState } from 'react'
import { differenceInDays } from 'date-fns'
import { Button } from '../Button'
import { SectionTitle } from '../SectionTitle'
import * as atoms from './TagsClound.atoms'

function getAllTechStack(stacks) {
    const allStackMap = new Map()
    const copiedStacks = stacks.slice().reverse()
    copiedStacks.forEach(({ node: project }, index) => {
        project.techStack.forEach(techStack => {
            const techStackTag = techStack.trim().toLowerCase()
            const nextElement = copiedStacks[index + 1]
            const endDate = nextElement ? new Date(nextElement.node.date) : new Date()
            if (!allStackMap.has(techStackTag)) {
                allStackMap.set(techStackTag, { startFrom: new Date(project.date), endDate })
            } else {
                const prevElement = allStackMap.get(techStackTag)
                allStackMap.set(techStackTag, { startFrom: prevElement.startFrom, endDate })
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

const sortTechStack = techStack => {
    return Array.from(techStack).sort((c1, c2) => {
        return c2[1].weigh - c1[1].weigh
    })
}

const getTagVariant = (tag, tagConfig, isTagSelected) => {
    const number = tag.length + tagConfig.weigh
    if (isTagSelected) {
        return 'accent'
    }
    return number % 2 === 0 ? 'default' : 'secondary'
}

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
                    const isTagSelected = selectedTags.has(tag)
                    return (
                        <atoms.TagsElement key={tag}>
                            <Button
                                onClick={() => (isTagSelected ? onPullTag(tag) : onPushTag(tag))}
                                variant={getTagVariant(tag, tagConfig, isTagSelected)}
                            >
                                #{tag} ({tagConfig.yearsOfUse}y)
                            </Button>
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
