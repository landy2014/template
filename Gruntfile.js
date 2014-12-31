//  Kinhom's Gruntfile
//  http://www.kinhom.com
//  CopyRight 2014 kinhom Inc.
//
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    //pkg: grunt.file.readJSON('package.json'),
	tmod: {
		template: {
			src: './tpl/**/*.html',
			dest: './sea-modules/template',
			options: {
				base: './tpl/', // template('tpl/index/main') >>> template('index/main')
				combo: false,
				minify: false,
				syntax : 'native',
				cache : true
			} 
		}
	},
	//监控
	watch :{
		template: {
			files : '<%=tmod.template.src%>',
			tasks : ['tmod'],
			options: {
                    spawn: false
                }
		}	
	}
	
  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-concat');
 // grunt.loadNpmTasks('grunt-contrib-copy');
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-tmod');
 // grunt.loadNpmTasks('grunt-contrib-imagemin');
  //grunt.loadNpmTasks('grunt-contrib-qunit');
  

  // Default task(s).
    grunt.registerTask('default', ['tmod','watch']);
  //grunt.registerTask('default', ['copy','concat','uglify','cssmin','htmlmin']);

};