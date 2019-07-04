---
title: 'Change text color based on background'
date: '2019-07-03'
cover: ./cover.jpg
photographer:
    login: 'chrislawton'
    name: 'Chris Lawton'
coverImageOrientation: 'horizontal'
lang: 'en'
authors:
    - name: Ruslan Abramov
      email: r.o.abramov@gmail.com
      avatar: https://avatars1.githubusercontent.com/u/13414557?v=4
---

Hi all! Today I am going to tell you about a simple but impressive css trick. Are you ready? Then lets go!

#TL;DR;

```css
mix-blend-mode: difference;
color: #d9d3c4; /* where #d9d3c4 is found by subtraction #13172a - #eceaee */
```

While working on landing page of my blog, I start thinking on where to inject contact information. The easiest answer is to place it right into hero component and in footer. Hmm, okay but what should we do in case when user scrolls down a bit and lose the sight of hero, but not enough to see contacts in footer. I found an inspiration in e-commerce websites 😆 That guys know how to position info that is always visible to users. Do you remember that on e-comm sites you always see some buttons? Add to cart, for instance. They even have a name for such elements - CTA (call to action).

This is probably what I really need. Cuz I do want my contact info to be available for users, in case they want to contact with me. But, opposite to e-comm websites, I don't want my contact information to take lots of space, I'd like it to be in form of links with fixed positions. I bet you know how to position element and change the writing mode style property. So it should be easy for you to implement the same element. So I do all the steps, set color for text to white color. Everything is alright. And then I scroll down... Gee, it disappears. Yep, the white text on white background is no good. So whats next? Maybe set it to dark color? But in this case it will be hardly seen on dark background. One more option is to find a color that will have enough contrast with both light and dark background. But honestly I don't want to introduce another color to my color palette.

The first thing that I've done is adding a background-color for contact links container so it should always be on dark background even while scrolling. But honestly - I don't like it. On lighter sections user will pay too much attention to it. This is not my goal. What I want is to use dark color on white sections, and lighter color on dark sections. Also I'd like it to be a reusable element. So it shouldn't be dependant on particular section sequence.

With that in mind I've started finding a way to implement that. My first thought was to use javascript for this. But honestly I didn't succeed in it. And the answer I've found in good-ol' css.

## mix-blend-mode: difference

According to CSS spec the difference blend mode:

> Subtracts the darker of the two constituent colors from the lighter color. Painting with white inverts the backdrop color; painting with black produces no change. B(Cb, Cs) = | Cb - Cs |

In other words it makes it kind of possible to achieve what I wanted to implement. If we subtracts from darker color the lighter one then we get a transit color that will be displayed as my primary dark color on white background, and as light color on dark ones.

The problem here is that I can't find exact color that will be displayed both as dark and light color from my color palette. It appears to be yellower then I want. It is my unfinished job 😃 and when I found some time for this I'll try to do it. If you know how to and want to help me - feel free to leave a comment! Help will be more than welcome!

So lets get back to code. For instance, if my dark color is `#13172a` and the light one is `#eceaee` then the resulted color is equal to `#d9d3c4`, which is simple subtraction of 16-digit numbers.

The last step that we need to do is to set the color for our text with `mix-blend-mode`

```css
mix-blend-mode: difference;
color: #d9d3c4;
```

If you use CSS-in-JS solution like I use styled-components then you may simply create a custom function for color subtraction and find the resulted color in run-time.

```js
styled.span`
    mix-blend-mode: difference;
    color: ${calculateColorDifference(colors.fullDark, colors.light)};
`
```

That's about all. I hope that you enjoy that simple trick. To tell the truth I've found a website with the same issue. They set color for text to white, and on scroll it also disappears on light background. I've send them a message how to fix it. And they use my advice! It is so great to help others!