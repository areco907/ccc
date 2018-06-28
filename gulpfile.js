var gulp = require('gulp');
var merge = require('gulp-merge-json');
var jsonminify = require('gulp-jsonminify');

var paths = {
  json: ['./src/app/**/*.json', './src/components/**/*.json', './src/pages/**/*.json']
};

gulp.task('default', ['watch']);

gulp.task('watch', function(){
    gulp.watch(paths.json, ['merge-json'])
});

gulp.task('merge-json', function () {
  gulp.src(paths.json)
    .pipe(merge({"fileName" : "messages.json"}))
    .pipe(jsonminify())
    .pipe(gulp.dest('www/resources'));
});