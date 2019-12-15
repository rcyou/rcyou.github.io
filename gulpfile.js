var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefix = require('gulp-autoprefixer'),
	fileinclude = require('gulp-file-include');


// -- Add HTML
gulp.task('fileinclude', function() {
  gulp.src(['tpls/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(''));
});

// -- SASS
gulp.task('sass', function() {
	gulp.src('css/scss/*.scss')
	.on('error', sass.logError)
	.pipe(sass())
	.pipe(autoprefix({
			browserlist: ['last 5 versions', '> 1%', 'ie 8', 'ie 9', 'ie 10']
		}))
	.pipe(gulp.dest('css/'))
	// load new CSS files in browser when task runs
});

// -- WATCH
// the array is a list of tasks that should be done before 'watch' task
// array order is not important
gulp.task('watch', ['sass','fileinclude'], function() {
	// watch is a built in method for gulp
	// pass in params for files to watch in a directory
	// array inludes names of tasks to run when gulp sees a change
	// if using partials, make sure the path is to those file, not parent .scss file
	gulp.watch('css/scss/partials/*.scss', ['sass']);
	gulp.watch('includes/*.html', ['fileinclude']);
	gulp.watch('tpls/*.html', ['fileinclude']);
});
// 'gulp watch' will keep running after command is entered
// to stop, type ctrl + c


// default task can be before, after, or in the middle
// of gulpfile and will still run all taks in array
// probably best to put at the end so its easier to read
gulp.task('default', ['sass', 'watch']);
