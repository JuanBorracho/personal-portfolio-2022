const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

// Styles Task - compile scss to css, minify, sourcemaps, autoprefixer
function styles() {
  return gulp
    .src('src/sass/**/*.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist', { sourcemaps: '.' }))
    .pipe(browserSync.stream());
}

// HTML task - copy html files from src to dist
function html() {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'));
}

// Image task - copy images from src to dist
function images() {
  return gulp.src('src/img/*').pipe(gulp.dest('dist/img'));
}

// JavaScript Task - move src folder to dist and minify
function js() {
  return gulp
    .src('src/scripts/*')
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
}

// Watch task
function watch() {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
  gulp.watch('src/*.html', html);
  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/sass/**/*.scss', styles, browserSync.reload);
  gulp.watch('src/scripts/*.js', js);
  gulp.watch('src/img/*', images);
}

// Default task
exports.default = gulp.series(styles, html, images, js, watch);
