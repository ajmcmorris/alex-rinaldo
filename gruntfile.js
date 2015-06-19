
module.exports = function(grunt) {
  // Do grunt-related things in here

  // Configuration Object
  grunt.config.init({

  		jshint: {
		    all: ['lib/*.js', 'test/*.js', 'Gruntfile.js']
		  }
  });

  // Minify Files
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Validate Files
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Compile SASS to CSS
  grunt.loadNpmTasks('grunt-contrib-sass');
};