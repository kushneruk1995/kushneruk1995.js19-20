module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'css/style.css': 'scss/style.scss'
            }
        }
    },
    concat: {
        js: {
          src: ['script/**/*.js'],
          dest: 'dist_script/script.main.js',
        },
        css: {
          src: ['css/**/*.css'],
          dest: 'dist_css/style.main.css',
        }
      },

    cssmin: {
      target: {
        files: {
          'dist_css/style.main.min.css': ['dist_css/style.main.css']
        }
      }
    },

    uglify: {
      dist: {
        src: ['dist_script/script.main.js'],
        dest: 'dist_script/script.main.min.js',
      },
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  
  grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify']);
};