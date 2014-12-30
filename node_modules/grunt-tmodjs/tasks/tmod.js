/*
 * grunt-tmod-jd
 * https://github.com/dlutwuwei/grunt-tmod-jd
 *
 * Copyright (c) 2014 wu wei
 * Licensed under the MIT license.
 */

var TmodJS = require('tmodjs/src/tmod.js');

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('tmod', 'grunt plugin for latest tmodjs', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = {
            output: this.options().output || './build',
            charset: this.options().charset || 'utf-8',
            debug: this.options().debug || false, // 此字段不会保存在配置中
            watch: this.options().watch || false,
            type: this.options().type || "templatejs",
            syntax: this.options().syntax || "native",
            helpers: this.options().helpers,
            escape: this.options().escape,
            compress: this.options().compress || true,
            runtime: this.options().runtime || "template.js",
            combo: this.options().combo || true,
            minify: this.options().minify || true,
            cache: this.options().cache || true
        };

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                var tmodjs = new TmodJS(filepath, options);

                tmodjs.on('compileError', function(data) {
                    if (!isWatch) {
                        process.exit(1);
                    }
                });

                tmodjs.saveConfig();


                tmodjs.compile();

            });

        });

    });

};