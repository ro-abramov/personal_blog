---
title: 'Creating an animated hamburger icon with react-spring'
date: '2019-06-13'
cover: ./cover.jpg
photographer:
    login: 'mr_vero'
    name: 'Irvan Smith'
coverImageOrientation: 'horizontal'
lang: 'en'
---

Through my career as web dev, I've created tons of custom "hamburger" menu icons/buttons with different animations. Working on my blog I realize that it maybe a good idea to write down how I tackle the task using React and awesome react animation library [react-spring](https://www.react-spring.io/).

But why react-spring? Well, It is smooth, easy to use, and constantly evolving animation library for react. It uses spring based animation, and instead of using duration/Bézier curves, we operate with tension and friction of a spring (opt-in support for duration is available also).

Lets jump right in the code.

## Prepare svg icons

We are going to operate directly with svg elements, so we need appropriate ones.

A "hamburger" (open) icon.

```html
<svg width="44" height="44" viewBox="0 0 44 44" fill="#000" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="6" rx="3" transform="translate(2, 7) rotate(0)" />
    <rect width="40" height="6" rx="3" transform="translate(2, 19) rotate(0)" />
    <rect width="40" height="6" rx="3" transform="translate(2, 31) rotate(0)" />
</svg>
```

And a closed one (cross)

```html
<svg width="44" height="44" viewBox="0 0 44 44" fill="#000" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="6" rx="3" transform="translate(5, 32) rotate(-45)" />
    <rect width="40" height="6" rx="3" transform="translate(10, 4) rotate(45)" />
    <rect width="40" height="6" rx="3" transform="translate(5, 32) rotate(-45)" />
</svg>
```

As you may notice, they differ only in transform property. And this is exactly what we need as we are going to animate this property. We also could use `path` element instead of `rect`, but to do so we have to use an additional library for path interpolation, as, afaik, `react-spring` can't interpolate path values out-of-the-box.

## Creating a MenuIcon component

We have two icons, so it is high time to create a React component. I'd like to create a stateless component that accepts a prop `isOpened` that will indicate whether we should render a "hamburger" or a cross.

But at first, we should create two config objects that would store the transform properties. Why? Bare with me, I promise it will make sense as soon as you will see a final component.

```javascript
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
```

And the component itself

```javascript
export function MenuIcon({ isOpened }) {
    const selectedConfig = isOpened ? openedTransformationConfig : closedTransformationConfig
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="#000" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="6" rx="3" transform={selectedConfig.top} />
            <rect width="40" height="6" rx="3" transform={selectedConfig.center} />
            <rect width="40" height="6" rx="3" transform={selectedConfig.bottom} />
        </svg>
    )
}
```

This is why we try to narrow the difference between icons to one property, extract that difference into config object and finally render it conditionally. So far so good. Actually we already have functional menu icon, and for some project it could be enough. Maybe it will be enough for you?

## Adding animation

I'm happy that you strive to polish even small ui elements. So lets add some animation. First, you should install `react-spring` library.

```bash
yarn add react-spring
```

I've already mentioned that we need to make transition between two state. To do so we would use a [`useSpring`](https://www.react-spring.io/docs/hooks/use-spring) hook, that accepts two property `from` and `to`. Well, actually, you could use both fields, but for lots of cases we could stick with only `to` field. In other words, skipping `to` prop is like skipping the first animation. The same effect could be achieved by setting same values for initial `from` and `to`, and in future we should manage both fields in sync.

```javascript
const { top, center, bottom } = useSpring({
    to: isOpened ? closedTransformationConfig : openedTransformationConfig,
})
```

Here we are conditionally setting config for `to` state. Lets break it down.

1.  By default `isOpened = false`, so the the config for 'hamburger' is set to `to` state. The animation is skipped as `from` field is missing.

2.  We set `isOpened = true`. Now `closedTransformationConfig` is set to `to` property. And react spring is going to figure out how to transition from previous state ('hamburger') to received one ('cross'). The process is called interpolation.

3.  `isOpened = false`. Same process as in second point but for opposite direction. Simle, isn't it?

Now we should somehow use the return values from `useSpring` hook.

```javascript
import { animated, useSpring, config } from 'react-spring'

export function MenuIcon({ isOpened }) {
    const { top, center, bottom } = useSpring({
        to: isOpened ? closedTransformationConfig : openedTransformationConfig,
        config: config.stiff,
    })
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="#000" xmlns="http://www.w3.org/2000/svg">
            <animated.rect width="40" height="6" rx="3" transform={top} />
            <animated.rect width="40" height="6" rx="3" transform={center} />
            <animated.rect width="40" height="6" rx="3" transform={bottom} />
        </svg>
    )
}
```

> Here I also change the config property. I prefer to use faster animation for simple UI elements.

What is `animated.rect`? `react-spring` export a special component that knows how to handle interpolated values (plus some perf tricks). So if you want to pass animation property to `div` element, than use `animated.div`, `span` - `animated.span` and so on and so forth.

Lets recap what we've done so far. We have a component that is able to show two states, and animate transition between them. Next step will be easy enough, we would also add color animation.

## Color animation

`react-spring` is able to interpolate almost all values. With that in mind, we need to add color properties to out config files, and pass interpolated color to animated component. I hope that it should be obvious so this is whole code with changes.

```javascript
import { animated, useSpring, config } from 'react-spring'

const openedTransformationConfig = {
    top: 'translate(2, 7) rotate(0)',
    center: 'translate(2, 19) rotate(0)',
    bottom: 'translate(2, 31) rotate(0)',
    color: '#ff0000', // Add color
}

const closedTransformationConfig = {
    top: 'translate(5, 32) rotate(-45)',
    center: 'translate(10, 4) rotate(45)',
    bottom: 'translate(5, 32) rotate(-45)',
    color: '#0000ff', // Add color
}

export function MenuIcon({ isOpened }) {
    const { top, center, bottom, color } = useSpring({
        to: isOpened ? closedTransformationConfig : openedTransformationConfig,
        config: config.stiff,
    })
    return (
        {/* Change svg to animated.svg, pass interpolated color as prop */}
        <animated.svg width="44" height="44" viewBox="0 0 44 44" fill={color} xmlns="http://www.w3.org/2000/svg">
            <animated.rect width="40" height="6" rx="3" transform={top} />
            <animated.rect width="40" height="6" rx="3" transform={center} />
            <animated.rect width="40" height="6" rx="3" transform={bottom} />
        </animated.svg>
    )
}
```

## Final thoughts

Animating elements with React may not be an easy task if you just start with it. That why I'd like to start with simple animation. I prefer to use `react-spring` for mentioned reasons. Also I'd like to mention that `react-spring` is constantly evolving project, it was one the first library to add hooks api in stable channel.

<!--

![Remote](./cover.jpg) -->
