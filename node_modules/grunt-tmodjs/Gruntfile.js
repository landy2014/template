/*
 * grunt-tmod
 * https://github.com/wuwei1/grunt-tmodjs
 *
 * Copyright (c) 2014 wuwei
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Configuration to be run (and then tested).
    tmod: {
      default: {
        options: {
            output: "js/",
            charset: "utf-8",
            syntax: "native",
            type: "templatejs",
            runtime:"adtpl.js",
            combo: true,
            minify: true
        },
        files: {
          src: 'tpl/'
        }
      }

    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.registerTask('tm',['tmod:default'])

};
