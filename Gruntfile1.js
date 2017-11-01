/**
 * Created by hejian on 2017/10/12.
 */
/*  单个文件压缩*/
module.exports = function (grunt) {
    grunt.initConfig({
        cssmin: {
            build: {
                src:'F:/模板/dome/1/js/2/test1.css',
                dest:'F:/模板/dome/1/js/2/test1.min.css'
            }
        },
        uglify: {
            build: {
                src: 'F:/模板/dome/1/js/1/test1.js',
                dest: 'F:/模板/dome/1/js/1/test1.min.js'
            }
        }
    });

    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //告诉grunt当我们在终端输入grunt时需要做些什么
    grunt.registerInitTask('default',['cssmin','uglify']);
};
