module.exports = function(grunt) {
  grunt.initConfig ({
    pkg : grunt.file.readJSON('package.json'), //read all the packages inside the json file

    // write the concat task
    concat : {
      dist: {
        src: [
          'js/modules/*.js',
          'js/main.js'
        ],
        dest: 'prod/production.js'
      }
    },


    uglify : {
      build : {
        src: 'prod/production.js',
        dest: 'prod/production.min.js'
      }
    },

    watch: {
      scripts: {
        files: ['js/main.js', 'js/modules/*.js'],
        tasks: ['concat', 'uglify'],
        option: {
          spawn: false
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat', 'uglify']);
  grunt.registerTask('watchFiles', ['watch']);

};

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'main.css': 'main.scss'
            }
        }
    }
});

grunt.registerTask('default', ['sass']);

const mozjpeg = require('imagemin-mozjpeg');

grunt.initConfig({
    imagemin: {
        static: {
            options: {
                optimizationLevel: 3,
                svgoPlugins: [{removeViewBox: false}],
                use: [mozjpeg()] // Example plugin usage
            },
            files: {
                'dist/img.png': 'src/img.png',
                'dist/img.jpg': 'src/img.jpg',
                'dist/img.gif': 'src/img.gif'
            }
        },
        dynamic: {
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'dist/'
            }]
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']);
