var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("task gulping ");
});

gulp.task('html', function(){
    console.log("TASK 2!!!!!!!!!!");
});

gulp.task('styles', function(){
    console.log("CSSS !!!!!!!!!!");
});


gulp.task('watch', function () {
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    });

});
