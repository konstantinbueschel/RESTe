'use strict';

module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			unzip: ['./modules'],
			dist: ['./dist/reste-commonjs-<%= pkg.version %>.zip']
		},

		titaniumifier: {
			module: {
				src: '.',
				dest: './dist'
			}
		},

		unzip: {
			module: {
				src: './dist/reste-commonjs-<%= pkg.version %>.zip',
				dest: ''
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-titaniumifier');
	grunt.loadNpmTasks('grunt-zip');

	grunt.registerTask('build', ['clean', 'titaniumifier:module']);
	grunt.registerTask('update', ['unzip:module']);
	grunt.registerTask('default', ['build']);
};
