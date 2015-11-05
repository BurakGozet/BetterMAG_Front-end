module.exports = function (grunt) {
 require('time-grunt')(grunt);
 require('load-grunt-tasks')(grunt);
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),

   less: {
     main: {
      files: {
        '_assets/css/main.css': '_assets/css/less/base.less'
      }   
    }         
  },

  watch: {
    css: {
      files: '_assets/css/less/*.less',
      tasks: ['less','cssmin'],
      options: {
        livereload: true,
      },
    },

    img: {
      files: '_assets/img/components/*.png',
      tasks: ['sprite'],
      options: {
        livereload: true,
      },
    },
  },

  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: '_assets/css/',
        src: ['main.css', '!main.min.css'],
        dest: '_assets/css/',
        ext: '.min.css'
      }]
    }
  },

  sprite: {
    all: {
      src: '_assets/img/components/*.png',
      dest: '_assets/img/sprite.png',
      destCss: '_assets/css/less/spriteinfo.less',
      imgPath:'../img/sprite.png'
    }
  },


});

grunt.loadNpmTasks('grunt-contrib-watch');

grunt.loadNpmTasks('grunt-contrib-cssmin');

grunt.registerTask('default', ['sprite','less','cssmin']);
};
