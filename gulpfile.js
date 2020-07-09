
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
sass.compiler = require('node-sass');


gulp.task('sass', function() {
 return gulp.src('app/scss/**/*.scss')
   .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
   .pipe(gulp.dest('app/css'))

   .pipe(browserSync.stream());
});


// Static Server and watching scss/html files
gulp.task('server', function (done) {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    gulp.watch("app/scss/**/*.scss", gulp.series('sass'));
    //  gulp.watch("template/assets/scss/**/*.scss", browserSync.reload);
    gulp.watch("app/*.html", browserSync.reload);
    done();
});




gulp.task('default', gulp.series('sass', 'server'));