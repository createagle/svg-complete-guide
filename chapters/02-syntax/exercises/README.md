# Chapter 2 · Exercise Answers

**English** | [简体中文](README.zh-CN.md)

## Exercise 1: Fix a broken SVG file

Problem: [01-broken.svg](01-broken.svg)　Answer: [01-fixed.svg](01-fixed.svg)

There are 5 errors:

1. Missing `xmlns="http://www.w3.org/2000/svg"`, so the standalone file is not treated as SVG.
2. `viewbox` must be `viewBox`; XML is case-sensitive.
3. `x=10` is missing its quotes.
4. `<rect …>` is not closed; write `<rect … />`.
5. `&nbsp;` is not defined in XML; use `&#160;` instead.

## Exercise 2: Predict the color

```html
<style>
  circle { fill: green; }
  #c { fill: purple; }
</style>
<svg viewBox="0 0 10 10">
  <circle id="c" cx="5" cy="5" r="4" fill="blue" style="fill: orange"/>
</svg>
```

Answer: **orange**. An inline `style` beats every stylesheet rule without `!important`. `#c` is more specific than `circle`, but both lose to the inline style, and `fill="blue"` is a presentation attribute with the lowest priority.

Without `style="fill: orange"` it is **purple**: the `#c` selector is more specific than `circle`.

## Exercise 3: Convert the legacy syntax to SVG 2

Problem: [03-legacy.svg](03-legacy.svg)　Answer: [03-modern.svg](03-modern.svg)

Change the three `xlink:href` attributes to `href`, then remove the `xmlns:xlink` declaration from the root element.
