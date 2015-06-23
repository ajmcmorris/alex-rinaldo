
module.exports = function(grunt) {
  // Do grunt-related things in here

  // Configuration Object
  grunt.config.init({

  		jshint: {
		    all: ['node_modules/grunt/lib/*.js', 'js/*.js', 'Gruntfile.js']
		  }
      sass: {                              
    dist: {                           
      options: {                       
        style: 'expanded'
      },
      files: {                         
        'css/styles.css': 'css/styles.scss',       
      }
    }
  },
      watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      }
    }

  });

  // Minify Files
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Validate Files
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Compile SASS to CSS
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['sass','jshint','uglify','watch']);
};