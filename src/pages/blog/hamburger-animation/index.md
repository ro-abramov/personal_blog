---
title: 'Creating an animated hamburger icon with react-spring'
date: '2019-06-13'
cover: ./cover.jpg
coverImageOrientation: 'horizontal'
---

Through my career as web dev, I've created tons of custom "hamburger" menu with different animations. Working on my blog I realize that it maybe a good idea to write down how I tackle the task using React and awesome react animation library [react-spring](https://www.react-spring.io/).

But why react-spring? Well, It is smooth, easy to use, and constantly evolving animation library for react. It uses spring based animation, and instead of using duration/Bézier curves, we operate with tension and friction of a spring (opt-in support for duration is available also).

But enough, just show me the code.

## Prepare svg icons

We are going to operate directly with svg elements, so we need appropriate ones.

A "hamburger" (open) icon.

```html
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="6" rx="3" fill="#000" transform="translate(2, 7) rotate(0)" />
    <rect width="40" height="6" rx="3" fill="#000" transform="translate(2, 19) rotate(0)" />
    <rect width="40" height="6" rx="3" fill="#000" transform="translate(2, 31) rotate(0)" />
</svg>
```

And a closed one (cross)

```html
<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="6" rx="3" fill="#000" transform="translate(5, 32) rotate(-45)" />
    <rect width="40" height="6" rx="3" fill="#000" transform="translate(10, 4) rotate(45)" />
    <rect width="40" height="6" rx="3" fill="#000" transform="translate(5, 32) rotate(-45)" />
</svg>
```

As you may notice, they differ only in transform property. And this is exactly what we need as we are going to animate this property. We also could use `path` element instead of `rect`, but in this case it we need to use an additional library for path interpolation, as, afaik, `react-spring` can't interpolate path values out-of-the-box.

> If you are interested in how I create the icons, then in the end of the post in bonus sections, I describe the whole process.

## Create a MenuIcon component

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
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="6" rx="3" fill="#000" transform={selectedConfig.top} />
            <rect width="40" height="6" rx="3" fill="#000" transform={selectedConfig.center} />
            <rect width="40" height="6" rx="3" fill="#000" transform={selectedConfig.bottom} />
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

In out component we would use simple [Spring](https://www.react-spring.io/docs/hooks/use-spring). Why? Lets break it down.

??

1.  We need the transition for a single element between two states.
2.  The component is already mounted. No need for enter/leave animations. In `react-spring` this could be achieved by using Transition animation primitive.
    ??

I've already mentioned that we need to make transition between two state, and `useSpring` accepts two property `from` and `to`. Great, that is what we need. Well, actually, you could use both fields, but for lots of cases we could stick with only `to` field. In other words, it is like we are skipping the first animation. The same effect could be achieved by setting same values for initial `from` and `to`, and in future we should manage both fields in sync.

```javascript
const { top, center, bottom } = useSpring({
    to: isOpened ? closedTransformationConfig : openedTransformationConfig,
})
```

Here we are conditionally setting config for `to` state. Lets break it down.

1.  By default `isOpened = false`, so the the config for 'hamburger' is set to `to` state. The animation is skipped as `from` field is missing.

2.  We change `isOpened = true`. Now `closedTransformationConfig` is set to `to` property. And react spring is going to figure out how to transition from previous state ('hamburger') to received one ('cross'). The process is called interpolation.

3.  `isOpened = false`. Same process as in second point but in opposite direction. Simle, isn't it?

Now we should somehow use the return values from `useSpring` hook.

```javascript
import { animated, useSpring, config } from 'react-spring'

export function MenuIcon({ isOpened }) {
    const { top, center, bottom } = useSpring({
        to: isOpened ? closedTransformationConfig : openedTransformationConfig,
        config: config.stiff,
    })
    return (
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <animated.rect width="40" height="6" rx="3" fill="#000" transform={top} />
            <animated.rect width="40" height="6" rx="3" fill="#000" transform={center} />
            <animated.rect width="40" height="6" rx="3" fill="#000" transform={bottom} />
        </svg>
    )
}
```

> Here I also change the config property. I prefer to use faster animation for simple UI elements.

<!--

![Remote](./cover.jpg) -->
