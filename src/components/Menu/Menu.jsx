import React, { useState, useCallback, Children } from 'react'
import { useSpring, useTrail, animated as a, config } from 'react-spring'
import { MenuIcon } from './MenuIcon'
import * as atoms from './Menu.atoms'
import { colors } from '../../utils/css/mixins'

export function Menu({ color, children }) {
    const [isOpened, setIsOpened] = useState(false)
    const toggle = useCallback(() => setIsOpened(x => !x), [setIsOpened])

    const childrenAsList = Children.toArray(children)

    const wrapperProps = useSpring({
        to: { opacity: isOpened ? 1 : 0, transform: `translateX(${isOpened ? 0 : 300}px)` },
        config: config.stiff,
    })

    const contentTrails = useTrail(childrenAsList.length, {
        to: { transform: `translateY(${isOpened ? 0 : -50}px)` },
        config: config.stiff,
    })

    return (
        <atoms.MenuWrapper>
            <atoms.MenuContainer as={a.nav} style={wrapperProps}>
                <atoms.MenuNavList>
                    {contentTrails.map((trail, index) => {
                        return (
                            <atoms.MenuNavListElement as={a.li} style={trail} key={index}>
                                {childrenAsList[index]}
                            </atoms.MenuNavListElement>
                        )
                    })}
                </atoms.MenuNavList>
            </atoms.MenuContainer>
            <atoms.MenuIconWrapper onClick={toggle}>
                <MenuIcon color={isOpened ? colors.main : color} isOpened={isOpened} />
            </atoms.MenuIconWrapper>
        </atoms.MenuWrapper>
    )
}
