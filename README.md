# Frontend Mentor - Fylo landing page with two column layout solution

This is my solution to the [Fylo landing page with two column layout challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Mobile](./screenshot/%5BDesktop%5D%20Frontend%20Mentor%20Fylo%20landing%20page%20with%20two%20column%20layout.webp)

Mobile screenshot is available [here](./screenshot/%5BMobile%5D%20-%20Frontend%20Mentor%20Fylo%20landing%20page%20with%20two%20column%20layout.webp).

### Links

- Solution URL: [Github Repo](https://github.com/devmor-j/fm-fylo-landing-page-with-two-column-layout)
- Live Site URL: [Hosted on Netlify](https://devmor-fylo-landing-page-with-two-column-layout.netlify.app/)

## My process

1) Start by writing **basic HTML structure**.

2) Setup **layout and containers** using flexbox. In this stage, we try not to add any *margin* or *padding* because layout should not depend on those properties.

3) Import **fonts** and apply them by considering inheritance and cascading features in CSS.

4) (Optional) Apply **fluid typography** system. This project uses an excellent package from [@davidhellmann](https://github.com/davidhellmann/tailwindcss-fluid-type) for fluid types.

5) **Style important elements** like buttons and inputs. Make sure *SVGs* are in good shape. See if it's worth compressing them (don't forget images, either).

6) Style sections and prepare for desktop **responsive design**

7) (Optional) Customize **scrollbar**, but please note that *Firefox* and *Chrome* have different syntax, and you should be careful here.

8) Add **spacing** to elements. Prefer *padding* to *margin* if possible or use `gap` in *flex containers* because I believe in most cases there are better alternatives, [read more here](https://betterprogramming.pub/dont-use-margins-for-spacing-between-components-use-gaps-1d3013ac1e80) and also [this article](https://www.freecodecamp.org/news/what-is-margin-collapse-and-how-to-avoid-it/) about *margin collapse* to get the full context.

9) Final touches and **test on different browsers**. Test with edge case scenarios to see if it still works. Catch any potential bugs.

10) Now it's time to write **JavaScript**. See what's needed and don't make a *js-fatigue situation* please :)

11) **Refactor** code and reuse any code if feasible.

12) Write good **documents** (also can be written as project progresses).

13) Deploy and go online.

## Built with

- Semantic HTML5 markup
- Mobile-first workflow
- Flexbox
- [TailwindCSS](https://tailwindcss.com/) - Main framework for CSS styling
- [TailwindCSS Fluid Type](https://github.com/davidhellmann/tailwindcss-fluid-type) - Bring fluid typography to TailwindCSS
- [PostCSS](https://postcss.org/) - Post process styles
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling (Builder)

## What I learned

This project has a convention in naming CSS classes.

> Tailwind custom class names must start with an asterisk (`*`).

For example, this project has a `*bar` class:

```css
/* only tailwind classes are allowed */
/* `\` is used to escape `*` character */

.\*bar {
  @apply rounded px-6 py-3 shadow-lg
}
```

This convention makes it much **easier to debug styles** because we know when a class name starts with `*` it must be a *custom tailwind class*.

All CSS styles should use vanilla tailwind but, if for some reason we want to write vanilla CSS then here's the second convention:

> Vanilla CSS class names must be prefixed with an underline (`_`) to indicate this class is not comming from tailwind.

```css
/* notice the "_" sign to differentiate from a custom tailwind class */

._visually-hidden:not(:focus):not(:active) {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```

With this rule in mind, no one should mistake tailwind's `hidden` class with `_visually-hidden` since it starts with `_` character.

## Useful resources

If you want to learn how to create a beautiful scrollbar, then read this great [blog post](https://ishadeed.com/article/custom-scrollbars-css/) from [Ahmad Shadeed](https://github.com/shadeed).

For *SVG* compression, I used [SVGOMG](https://jakearchibald.github.io/svgomg/).

Looking for a good SVG icon? Then check out [Icônes](https://icones.js.org/) built by [Anthony Fu](https://github.com/antfu). This project's brand icons are designed by [Ionicons](https://icones.js.org/collection/ion) (the original [repo](https://github.com/ionic-team/ionicons)).

## Author

- Frontend Mentor - [@devmor-j](https://www.frontendmentor.io/profile/devmor-j)
