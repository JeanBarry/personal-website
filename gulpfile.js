// Exports
const {src, dest, watch, parallel, series} = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

// Variables
const files = {
    indexLocation : 'src/index.html',
    faviconLocation : 'src/*.ico',
    scssLocation : 'src/styles/**/*.scss',
    jsLocation : 'src/scripts/**/*.js'
};

//copy src files
function copyTask(){
    return src(files.indexLocation)
    .pipe(dest('public'))
    .pipe(src(files.faviconLocation))
    .pipe(dest('public'));
}

// Css Tasks
function sassTask(){
    return src(files.scssLocation)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('public/dist/styles'));
}

// Javascript Tasks


// Watcher Task
function watchTask(){
    watch(files.indexLocation, copyTask);
    watch(files.scssLocation, sassTask);
}

exports.default = series(copyTask, sassTask, watchTask);