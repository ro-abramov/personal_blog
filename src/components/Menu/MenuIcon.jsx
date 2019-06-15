import React from 'react'
import { useSpring, animated as a, config } from 'react-spring'
import { colors } from '../../utils/css/mixins'

const openedTransformationConfig = {
    top: 'translate(2, 7) rotate(0)',
    center: 'translate(2, 19) rotate(0)',
    bottom: 'translate(2, 31) rotate(0)',
}

// const inbetweenD = {
//     top: 'translate(14, 20) rotate(-90)',
//     center: 'translate(-14, 24) rotate(90)',
//     bottom: 'translate(14, 20) rotate(-90)',
// }

const closedTransformationConfig = {
    top: 'translate(5, 32) rotate(-45)',
    center: 'translate(10, 4) rotate(45)',
    bottom: 'translate(5, 32) rotate(-45)',
}

export function MenuIcon({ color = colors.main, isOpened = false }) {
    const { top, center, bottom, color: interpolatedColor } = useSpring({
        // to: [{ ...inbetweenD, config: { ...config.stiff, duration: 100 } }, isOpened ? closeD : openD],
        // from: openD,
        to: { ...(isOpened ? closedTransformationConfig : openedTransformationConfig), color },
        config: config.stiff,
    })

    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <a.rect width="40" height="6" rx="3" fill={interpolatedColor} transform={top} />
            <a.rect width="40" height="6" rx="3" fill={interpolatedColor} transform={center} />
            <a.rect width="40" height="6" rx="3" fill={interpolatedColor} transform={bottom} />
        </svg>
    )
}
