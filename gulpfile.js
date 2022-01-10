const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Sass Task - compile to css file, minify, sourcemaps
function styles() {
  return gulp
    .src('src/sass/**/*.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(gulp.dest('dist', { sourcemaps: '.' }))
    .pipe(browserSync.stream());
}

// Copy HTML files to dist folder
function html() {
  return gulp.src('src/*.html').pipe(gulp.dest('dist'));
}

//Copy images to dist folder
function images() {
  return gulp.src('src/img/*').pipe(gulp.dest('dist/img'));
}

// JavaScript Task
function js() {
  return gulp.src('src/scripts/*').pipe(gulp.dest('dist/scripts'));
}

// Watch function
function watch() {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
  gulp.watch('src/*.html', html);
  gulp.watch('src/*.html').on('change', browserSync.reload);
  gulp.watch('src/sass/**/*.scss', styles);
  gulp.watch('src/img/*', images);
  gulp.watch('src/scripts/*.js', js);
}

exports.default = gulp.series(styles, html, images, js, watch);
