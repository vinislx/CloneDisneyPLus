const Gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function compileSass() {
    return Gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(Gulp.dest('./dist/styles'));
}

function comprimirimg() {
    return Gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(Gulp.dest('./dist/images'));
}

exports.default = gulp.parallel (compileSass, comprimirimg);
exports.watch = function() {
    Gulp.watch('./src/styles/*.scss', Gulp.parallel(compileSass));
}

