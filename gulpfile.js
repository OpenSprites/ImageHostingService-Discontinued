'use strict'

const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const babel = require('gulp-babel')
const stylus = require('gulp-stylus')
const sourcemaps = require('gulp-sourcemaps')
const browserify = require('gulp-browserify')

gulp.task('default', ['css', 'js', 'watch'])

gulp.task('watch', function() {
	nodemon({
		script: 'index.js',
		ext: 'html js styl',
		ignore: ['dist/*', 'uploads/*'],
		tasks: ['css', 'js']
	})
})

gulp.task('css', function() {
	return gulp.src('src/style.styl')
	.pipe(sourcemaps.init())
	.pipe(stylus({
		compress: true
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist'))
})

gulp.task('js', function() {
	return gulp.src('src/index.js')
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['es2016-node5'],
		compact: true
	}))
	.pipe(browserify({
		debug: true,
		extensions: ['.js']
	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist'))
})
