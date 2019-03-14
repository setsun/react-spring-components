# React Spring Components

An animation component library for common UI animations that are more performant using JS accelerated spring physics.

`react-spring-components` has peer dependencies on `react` and `react-spring`, and supports `webpack` tree-shaking by default: https://bundlephobia.com/result?p=react-spring-components

`npm i react-spring-components`

# Motivation
Certain CSS properties like `height`, `width`, and `scrollTop` are traditionally hard to animate in CSS, given that these properties affect layout.

For properties that affect layout, the browser has to recalculate all other elements that are affected by these properties changing, and layout the page again. This is known as browser reflow: https://developers.google.com/speed/docs/insights/browser-reflow. As such, these animations tend to be choppy as browser reflow is computation heavy, and blocks the main UI thread.

`react-spring-components` aims to use `react-spring` for the most common UI animations where browser reflow is unavoidable, and accelerate these animations with JS spring animations optimized with `requestAnimationFrame`.

# Components
- `HeightSpring`
- `WidthSpring`
- `Scroller`
