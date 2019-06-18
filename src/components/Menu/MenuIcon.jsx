import React from 'react'
import { useSpring, animated as a, config } from 'react-spring'
import { colors } from '../../utils/css/mixins'
import * as atoms from './Menu.atoms'

const openedTransformationConfig = {
    top: 'translate(2, 7) rotate(0)',
    center: 'translate(2, 19) rotate(0)',
    bottom: 'translate(2, 31) rotate(0)',
}

const closedTransformationConfig = {
    top: 'translate(5, 32) rotate(-45)',
    center: 'translate(10, 4) rotate(45)',
    bottom: 'translate(5, 32) rotate(-45)',
}

export function MenuIcon({ color = colors.main, isOpened = false, style = {} }) {
    const { top, center, bottom, color: interpolatedColor } = useSpring({
        to: { ...(isOpened ? closedTransformationConfig : openedTransformationConfig), color },
        config: config.stiff,
    })

    return (
        <atoms.MenuIconSvg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
            as={a.svg}
            style={style}
            fill={interpolatedColor}
        >
            <a.rect width="40" height="6" rx="3" transform={top} />
            <a.rect width="40" height="6" rx="3" transform={center} />
            <a.rect width="40" height="6" rx="3" transform={bottom} />
        </atoms.MenuIconSvg>
    )
}
