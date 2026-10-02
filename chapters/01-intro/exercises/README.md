# Chapter 1 · Exercise Answers

**English** | [简体中文](README.zh-CN.md)

## Exercise 1: Turn the check mark into a cross

Answer: [01-cross.svg](01-cross.svg)

Replace the `<path>`'s `d` with two crossing segments: `M11 11L21 21` draws top-left to bottom-right, and `M21 11L11 21` draws top-right to bottom-left.
A cross has no corners, so `stroke-linejoin` can go too. The circle is also changed to red `#dc2626`, which fits the meaning of "error".

## Exercise 2: Turn the circular background into a rounded square

Answer: [02-rounded-square.svg](02-rounded-square.svg)

Replace `<circle>` with `<rect x="2" y="2" width="28" height="28" rx="6">`.
`x`/`y` is the top-left corner; the 2-unit margin keeps the size the same as the original radius-14 circle. `rx` sets the corner radius.

## Exercise 3: Choose formats for a real page

A reference answer, using a typical e-commerce product page:

| Image | Format | Why |
| --- | --- | --- |
| Header logo | SVG | Geometric, shown at several sizes, must stay crisp |
| Cart, favorite and other icons | SVG | Must follow the theme color and change on hover |
| Product photos | AVIF / WebP (JPEG fallback) | Photographic; the information is in every pixel |
| Small price-trend chart | SVG | Few data points; needs hover tooltips |
| Customer review photos | Raster | User-uploaded SVG may contain scripts; never inline it as SVG without sanitizing |
