const Gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return Gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(Gulp.dest('./dist/styles'));
        
}

exports.default = compileSass;
exports.watch = function() {
    Gulp.watch('./src/styles/*.scss', Gulp.parallel(compileSass));
}