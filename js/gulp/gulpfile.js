var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('default', ['run', 'lint'], function() {
    console.log("Default task");
});


gulp.task('run', function () {
    console.log("gulp object", gulp);
});


gulp.task('watch', function() {
    gulp.watch('*.less', ['lessjs']);
});


gulp.task('lint', function() {
    return gulp.src('*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
