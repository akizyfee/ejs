var gulp = require('gulp');
var ejs = require("gulp-ejs");
const $ = require('gulp-load-plugins')();


function layoutHTML() {
    return gulp
        .src(['./src/**/*.html'])
        .pipe($.frontMatter())
        .pipe(
            $.layout((file) => {
                return file.frontMatter;
            }),
        )
        .pipe(gulp.dest('./public'))
};

exports.layout = layoutHTML;