var hulp = require("gulp");
var browserSync = require('browser-sync').create();
var reolad = browserSync.reload;
HTMLOptGroupElement.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*html").on("change", reload);
});