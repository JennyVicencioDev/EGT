var gulp = require("gulp"),
    watch = require("gulp-watch"),
    plumber = require("gulp-plumber"),
    gulpsass = require("gulp-sass")(require('sass')),
    autoprefixer = require("gulp-autoprefixer"),
    cleanCss = require("gulp-clean-css"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat"),
    jshint = require("gulp-jshint"),
    uglify = require("gulp-uglify"),
    // imagemin = require("gulp-imagemin"),
    // livereload = require("gulp-livereload"),
    rename = require("gulp-rename");
    notify = require("gulp-notify");

var onError = function(err){
    console.log("Se ha producido un error: ", err.message);
    this.emit("end");
};

gulp.task("sass", function(){
    return gulp.src("./sass/main.scss")
        .pipe(plumber({errorHandler:onError}))
        .pipe(sourcemaps.init())
        .pipe(gulpsass())
        .pipe(autoprefixer("last 4 versions"))
        // .pipe(cleanCss({
        //     keepSpecialComments: 1,
        //     format: {breaks: {afterComment: true, afterAtRule: true, beforeComment: true}},
        //     inline: ['none'],
        // }))
        .pipe(sourcemaps.write("."))
        // .pipe(gulp.dest("."))
        // .pipe(rename("style-rtl.css"))
        .pipe(gulp.dest("./css"));
        // .pipe(notify({message: "Estilos tema finalizados", onLast: true}));
    });

gulp.task("sass base", function(){
    return gulp.src("./sass/base-styles.scss")
        .pipe(plumber({errorHandler:onError}))
        .pipe(gulpsass())
        .pipe(autoprefixer("last 4 versions"))
        .pipe(cleanCss({
            specialComments: 1, 
            format: {breaks: {afterComment: true, afterAtRule: true, beforeComment: true}},
            inline: ['none'],
        }))
        .pipe(sourcemaps.init())
        .pipe(rename("base-styles.min.css"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./css"));
        // .pipe(notify({message: "Estilos base finalizados", onLast: true}));
});


gulp.task("lint", function(){
    return gulp.src(["./js/**/*.js", "!./js/vendors/**/*.js"])
        .pipe(jshint());
});

gulp.task("scripts base", function(){
    return gulp.src("./js/vendors/**/*.js")
        .pipe(jshint())
        .pipe(plumber({errorHandler:onError}))
        .pipe(concat("base-scripts.min.js"))
        // .pipe(uglify({
        //     output: {
        //         // beautify: true,
        //         comments: /^!/
        //     }
        // }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./js"));
        // .pipe(notify({message: "Scripts librerías finalizados", onLast: true}));
});

gulp.task("watch", function(){
    gulp.watch(["./sass/style.scss", "./sass/**/*.scss", "!./sass/vendors/**/*.scss"], { delay: 2000 }, gulp.parallel("sass"));
    gulp.watch(["./sass/base-styles.scss", "./sass/vendors/**/*.scss"], { delay: 2000 }, gulp.parallel("sass base"));
    gulp.watch(["./js/vendors/**/*.js"], { delay: 2000 }, gulp.parallel("scripts base"));
});

gulp.task("default", gulp.parallel(["sass", "sass base", "scripts base", "watch"]));

/* Tareas Gulp por: Jennyfer Vicencio  */

/* 
Instalación de dependencias: 
    npm install gulp gulp-autoprefixer gulp-clean-css gulp-concat gulp-imagemin gulp-jshint gulp-jslint gulp-livereload gulp-notify gulp-plumber gulp-rename gulp-sass gulp-sourcemaps gulp-uglify gulp-watch
*/