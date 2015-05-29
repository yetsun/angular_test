module.exports = (grunt) ->

  #Project configuration.
  grunt.initConfig {
      auto_install: {
        local: {},
        subdir: {
          options: {
            cwd: 'subdir',
            stdout: true,
            stderr: true,
            failOnError: true,
            npm: '--production'
          }
        }
      }
    }

  #Load the plugin that provides the "auto-install" task.
  grunt.loadNpmTasks 'grunt-auto-install'

  #Default task(s).
  grunt.registerTask 'default', ['auto_install']

