const gulp = require('gulp');
const { src, dest, watch, parallel, series } = require('gulp');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

async function minifyingjs(){
    gulp.src('src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dest/scripts'))
}

async function minifyingimg(){
    gulp.src('src/icons/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/icons'))
}

function watching(){
    watch('src/scripts/*.js', series(minifyingjs));
    watch('src/icons/*', series(minifyingimg));
}


exports.default = parallel(minifyingjs,minifyingimg, watching)