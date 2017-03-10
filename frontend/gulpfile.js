var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var es = require('event-stream');
var nunjucks = require('gulp-nunjucks');
var del = require('del');
var connect = require('gulp-connect');
var uglify = require('gulp-uglifyjs');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');
var debug = require('gulp-debug');

gulp.task('clean', function() {
  return del(['dist/**/*']);
});
/*
gulp.task('build', function() {
  gulp.src('./src/index.html')
    .pipe(inject(gulp.src(mainBowerFiles({
      overrides: {
        bootstrap: {
          main: [
            './dist/js/bootstrap.js',
            './dist/css/*.min.*',
            './dist/fonts/*.*'
          ]
        },
        nunjucks: {
          main: [
            './browser/nunjucks-slim.min.js'
          ]
        }
      }
    }), {read: false}), {name: 'bower'}))
    .pipe(inject(es.merge(
      gulp.src('./src/app/**//*.js', {read: false})
    )))
    .pipe(gulp.dest('./dist'))
});
*/
gulp.task('build', ['uglifyjs'], function() {
  gulp.src('./src/index.html')
    .pipe(inject(gulp.src('./dist/app/js/vendor/vendor.js', {read: false}), {name: 'bower', ignorePath: 'dist'}))
    .pipe(inject(gulp.src('./src/app/js/**/*.js', {read: false}), {ignorePath: 'src'}))
    .pipe(gulp.dest('./dist'));
  gulp.src('./src/app/js/**/*.js')
    .pipe(gulp.dest('./dist/app/js'));
});

gulp.task('uglifyjs', function() {
  var filterJS = gulpFilter('**/*.js', { restore: true });
  return gulp.src(mainBowerFiles())
    .pipe(filterJS)
    .pipe(debug())
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/app/js/vendor/'))
    
});

gulp.task('precompile', function() {
  gulp.src('./src/app/templates/homepage.html')
    .pipe(nunjucks.precompile())
    .pipe(gulp.dest('./src/app/js'));
});

gulp.task('webserver', function() {
  connect.server({
    root: 'dist'
  });
})

gulp.task('default', ['clean', 'uglifyjs', 'build', 'precompile']);
