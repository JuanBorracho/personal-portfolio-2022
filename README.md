# My Personal Portfolio 2022

## Table of Contents

1. [Project Overview](/personal-portfolio-2022#project-overview)
2. [Dev Dependencies]()
3. [Design]()
   - [Theme & Concept]()
   - [Typography]()
   - [Assets]()
   - [Colours]()
   - [Desktop First]()
4. [CSS Reset]()
5. [REM Font Size Method]()
6. [BEM]()
7. [Inheritance]()
8. [Sass]()
9. [Responsive Design]()
10. [Gulp]()
11. [Challenges]()

## Project Overview

The goal of this project was to design and then build a personal portfolio site to showcase my work.

My main aim was to practice a variety of new CSS skills and techniques that I have learned alongside using the BEM naming methodology and Sass for the first time.

My secondary aim was to gain experience using the build tool, Gulp, for the first time.

The only Javascript used in this project is for the mobile menu. I used vanilla Javascript (ES6).

Below I will explain some of the techniques and technologies I have used as well as some of the challenges I faced during this project.

## Dev Dependencies

## Design

### Theme & Concept

The general theme and inspiration behind this design is coding and code editors and I tried to reference this in each aspect of the design.

### Typography

For the typography, I chose Work Sans for the heading text with a strong font weight because it is a very bold, striking, modern, sans serif font, which is easy to read, captures attention and works well for the web. I paired this with a monospace font type for the body text to reflect the coding/code editor theme in the typography. The font I chose was PT Mono because it is one of the more elegant looking monospace fonts!

### Assets

I did not want to over complicate the design, so I chose very basic, geometric shapes to decorate my page, predominantly using dots or circles. The dots arranged in a square grid is a very common (and probably over-used!) design technique, but effective. The use of the dots also plays into the coding theme by referencing dot notation. My h2 headings are written in the style of CSS classes and I continued the coding theme by using the strict equality operator as a divider underneath the headings. Similarly in my hero section, I wrote the h1 title of the page in the style of a javascript function and by using camel case.

### Colours

For the colour palette, I took inspiration from the bright colours of VS Code themes such as Monokai Pro, One Dark Pro and Dracula. I also used the colour wheel tool at color.adobe to refine my colour palette. I was keen to keep to five main colours and then a couple more that are tints and shades of those colours.

### Desktop First

I decided to design using a desktop first approach. Even though the majority of users will be viewing on mobile devices, I personally find it easier to conceptualise the design in Figma for a desktop size screen and then work backwards down to mobile viewports. Also, for writing media queries, all the tutorials I have watched have worked on this basis, using a max-width rather than a min-width approach. The only exception to this is my breakpoint for large screens which uses a min-width of 1800px.

## CSS Reset

I am aware of a few ways to reset the default styles we get from the browser. One popular option is [Normalize](https://necolas.github.io/normalize.css/). However, I have chosen to write my own basic reset that I put in my \_base.scss file, only resetting the styles I will be using in my project. I took notes from this [modern CSS reset](https://piccalil.li/blog/a-modern-css-reset/) method by Andy Bell.

## REM font size method

This is a method by which we change all pixel units to rem units which are based on the root font size that is set in the html selector. Rem units are relative units that are calculated in relation to the root font size. Whereas em units are calculated in relation to the parent element's font size.

I started by changing the root font size to 10px. This means that 1 rem will equal 10px. Therefore, all I needed to do was divide the pixel unit by 10 to get the rem unit. For example, 16 pixels becomes 1.6 rem.

This method is useful for responsive design and writing media queries because it means all we need to change is the root font size and all the other rem units will respond accordingly, because they are relative to that.

However, it is bad practice to set the font-size property in the html selector to a pixel unit. This is because it overrides the browser's font size setting that the user is able to change manually. Therefore, I have set the font-size property in the html selector to a percentage, which is worked out as a percentage of the browser's default font size, which is 16px. Therefore, if I set the font-size property to 100% it would make the root font size 16px. In order to set the root font size to 10px I needed to calculate 10 divided by 16 which is 0.625, which is 62.5%.

## BEM

In this project I have used the BEM naming methodlogy for my css classses for the first time. BEM stands for Block, Element, Modifyer.

Block - this is a standalone component that can be re-used anywhere on the site.

Element - this is part of a block that has no meaning on it's own.

Modifier - a flag we can put on a block or element to make it different, or make a different version. For example, a button would be an element, and "round" would be a modifier to make a round button.

The syntax is as follows:

.block
.block**element
.block**element--modifier

## Inheritance

In CSS we should always use inheritance wherever we can, instead of using things like the universal selector or !important rules.

Therefore, in the universal selector I have set the box-sizing property to the 'inherit' keyword in order to force inheritance. Then, in the body selector, I have set the box-sizing property to border-box. This means that every element on the page will inherit the box-sizing property from the body.

## Sass

In this project I have used Sass for the first time. There are two different syntaxes for sass and I have chosen to use the SCSS syntax. This is because I prefer the way it looks and it seems to be the most popular syntax to use.

Overall I have really enjoyed using Sass and can hardly imagine going back to normal css! I particularly like the nesting functionality which keeps all the code related to a certain block in one place. I also like how nesting, mixins and variables all help to make the code more DRY.

For the folder structure I have taken inspiration from the 7-1 pattern. The 7-1 pattern uses 7 different folders, within which there are several partial Sass files, and 1 main Sass file where we import all the partial files. This main file, which I called main.scss, is the file that gets compiled.

The recommended folders in the 7-1 pattern are:

- base/ this is the basic project definitions
- components/ one file for each component
- layout/ here we define the layout for the project
- pages/ here we have styles for specific pages of the project
- themes/ for different visual themes
- abstracts/ for code that does not output CSS such as variables or mixins
- vendors/ for all third party CSS goes

I am aware that this structure is aimed at much larger projects, so I have not used all of these folders. I don't have any third party stylesheets or different themes, for example, so I am not using the vendors or themes folders in this project.

## Responsive Design

When considering responsive design, I tried to use techniques that gave me a lot of responsive behaviour already. For example, I can achieve this by using rem units, flexbox and the `repeat(auto-fit, minmax())` property of CSS grid.

When writing my media queries, I needed to keep in mind that rem units would not work. This is because in media queries rem units are not affected by the root font-size property defined in the html selector. Therefore, I needed to use em units. 1 em is equal to 16 pixels, therefore, to get the em unit I divided the pixel value by 16. For example, 600px divided by 16 becomes 37.7em.

I also chose to write my own custom breakpoints which were based on the point at which my particular design broke, rather than using arbitary values for phone, tablet and desktop.

I needed to keep in mind that the order of the media queries is important due to the cascading nature of CSS.

One thing I have not done in this project is create responsive images. I am aware, for example, that you can use the `srcset` attribute to render different versions of the same image depending on the screen resolution the user is viewing on. If it was a retina screen, it would be 2x the size.

## Gulp

I wanted to use this project as an opportunity to experiment with using Gulp for the first time.

- First I installed the Gulp CLI globally using NPM
- Then I made a gulpfile in the root of the directory

- In order to do this I had to run npm init which creates the package.json file
- Then I installed all the packages I needed as dev dependencies

The packages, or gulp plugins, that I decided to use were the following.

- I used browser-sync to automatically reload the page each time I save a file
- I used auto-prefixer which automatically inserts browser prefixes to the css if they are needed
- I used gulp-sass to compile my scss files into one css file
- I used clean-css to minify that css file
- I have used the source maps which are built into gulp 4 to make sure we can identify the location of the code when using the dev tools in the browser.

As I only have one Javascript file in this project anyway I thought it was not necessary to use gulp-concat. Therefore I have just used gulp-uglify to minify the Javascript and then pipe it to the dist folder.

Similarly with HTML I have just piped the files from the src folder to the dist folder.

For my images, I chose not to use gulp-imagemin to optimise my images because I have optimised the images already by processing them through https://imagecompressor.com/ and adding the optimised file to the project. Therefore my image task simply pipes the images from the src folder to the dist folder.

## Challenges

One of the main challenges I encountered was the responsive styling. For example, I noticed that the hover effects I had designed on desktop didn't work on mobile because there is no hover on mobile! This meant that they would run once, but then stick. Therefore, in order to overcome this, I just removed all hover styles from tablet size downward.

It also took some time to get used to using Sass, but now I have had some practice I really like it.

Another new area for me in this project was using Gulp. I am aware that there is lots more you can do with Gulp, but I have enjoyed exploring it in this project.
