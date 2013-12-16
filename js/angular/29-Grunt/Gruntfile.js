module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      site: {
        src: ['src/app.js', 'src/lib.js'],
        dest: 'dest/site.js'
      },
      details: {
        src: ['src/lib.js', 'src/app.js'],
        dest: 'dest/details.js'
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });

};
