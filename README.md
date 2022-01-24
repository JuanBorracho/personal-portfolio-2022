# My Personal Portfolio 2022

## Project Overview

The goal of this project was to design and then build a personal portfolio site to showcase my work.

My main aim was to practice a variety of new CSS skills and techniques that I have learned alongside using the BEM naming methodology and Sass for the first time.

The only Javascript used in this project is for the mobile menu and grid filters. I used vanilla Javascript (ES6).

I also wanted to gain experience using the build tool, Gulp, for the first time.

Below I will explain some of the techniques and technologies I have used as well as some of the challenges I faced during this project.

## Getting Started

## Design

## CSS Reset

## REM font size method

## BEM

## Inheritance

## Sass

## Responsive Design

## Gulp

I wanted to use this project as an opportunity to experiment with using Gulp for the first time.

- [x] First I installed the Gulp CLI globally using NPM
- [x]Then I made a gulpfile in the root of the directory
- [x] In order to do this I had to run npm init which creates the package.json file
- [x] Then I installed all the packages I needed as dev dependencies

The packages, or gulp plugins, that I decided to use were the following.

- [x]I used browser-sync to automatically reload the page each time I save a file
- [x]I used auto-prefixer which automatically inserts browser prefixes to the css if they are needed
- [x]I used gulp-sass to compile my scss files into one css file
- [x]I used clean-css to minify that css file
- [x]I have used the source maps which are built into gulp 4 to make sure we can identify the location of the code when using the dev tools in the browser.

As I only have one Javascript file in this project anyway I thought it was not necessary to use gulp-concat. Therefore I have just used gulp-uglify to minify the Javascript and then pipe it to the dist folder.

Similarly with HTML I have just piped the files from the src folder to the dist folder.

For my images, I chose not to use gulp-imagemin to optimise my images because I have optimised the images already by processing them through https://imagecompressor.com/ and adding the optimised file to the project. Therefore my image task simply pipes the images from the src folder to the dist folder.

## Challenges
