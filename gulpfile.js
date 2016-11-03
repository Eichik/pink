var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


// create a task that ensures the `js` task is complete before
// reloading browsers
gulp.task('bs-load', function (done) {
    browserSync.reload();
    done();
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "src",
            index: "index.html"
        }
    });

    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("src/css/*.css", ['bs-load']);
    gulp.watch("src/*.html", ['bs-load']);
    gulp.watch("src/js/*.js", ['bs-load']);
});
