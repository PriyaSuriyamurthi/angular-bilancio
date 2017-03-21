'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    refresh = require('gulp-livereload'),
    cache = require('gulp-cache'),
    imagemin = require('gulp-imagemin'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon'),
    lr = require('tiny-lr'),
    server = lr();

var expressServer = require('./server');
gulp.task('serve_', function() {
  console.log('Server');
  expressServer.startServer();
});

gulp.task('serve', function () {
  nodemon({ script: 'server.js', env:{
            PORT:8000
        }, ext: 'js html', ignore: ['views/*', 'node_modules/*'], })
  .on('change', ['lint'])
  .on('restart', function () {
    console.log('Restarted webserver')
  });
});

// Dev task
gulp.task('dev', ['views', 'styles', 'images', 'lint', 'browserify', 'watch'], function() {});

// JSLint task
gulp.task('lint', function() {
  gulp.src('./views/js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(gulp.dest('./dist/js/'));
});

// Styles task
gulp.task('styles', function() {
  gulp.src('./views/css/*.css')
  // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
  .pipe(sass({onError: function(e) { console.log(e); } }))
  // Optionally add autoprefixer
  .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
  // These last two should look familiar now :)
  .pipe(gulp.dest('dist/css/'));
});

// Browserify task
gulp.task('browserify', function() {
  var bundleStream = browserify({
    entries: ['./views/app.js'],
    debug: true
  }).bundle().pipe(source('app.js'));
  return bundleStream.pipe(gulp.dest('./dist'));
});

gulp.task('images', function() {
  return gulp.src('views/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(livereload(server))
    .pipe(gulp.dest('dist/images'));
});

// Views task
gulp.task('views', function() {
  // Get our index.html
  gulp.src('./views/index.html')
  // And put it in the public folder
  .pipe(gulp.dest('dist/'));

  // Any other view files from client/views
  gulp.src('./views/view/**/*')
  // Will be put in the public/views folder
  .pipe(gulp.dest('./dist/view/'));
});

gulp.task('watch', ['serve', 'lint'], function() {
  // Start live reload server
  refresh.listen();

  // Watch our scripts, and when they change run lint and browserify
  gulp.watch(['./views/**.js', './views/js/*.js'],[
    'lint',
    'browserify'
  ]);

  // Watch our sass files
  gulp.watch(['./views/css/*.css'], [
    'styles'
  ]);

  // Watch view files
  gulp.watch(['./views/view/*.html'], [
    'views'
  ]);

  gulp.watch('./dist/**').on('change', refresh.changed);

});

gulp.task('default', ['dev']);