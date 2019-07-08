import React from 'react'
import { Button } from '../Button'

export function Tag({ selectedTags, onPullTag, onPushTag, color, backgroundColor, tag, children }) {
    const isSelected = selectedTags.has(tag)
    const opacity = selectedTags.size === 0 || isSelected ? 1 : 0.3
    return (
        <Button
            onClick={() => (isSelected ? onPullTag(tag) : onPushTag(tag))}
            style={{ color, backgroundColor, opacity }}
        >
            {children}
        </Button>
    )
}
