/**
 * Created by shutong037 on 2017/10/12.
 */
/*整个文件夹压缩*/
module.exports = function (grunt) {
    grunt.initConfig({
        // css压缩
        cssmin: {
            target: {
                files: [{
                    expand: true,       //展开下面*通配符匹配的文件
                    cwd: 'F:/模板/dome/1/js/2/',     //源文件根目录
                    src: ['*.css', '!**/*.min.css'],  //不要做 “!” 指定的文件
                    dest: 'F:/模板/dome/1/js/2/',        //压缩文件的输出目录
                    ext: '.min.css'    //压缩文件的后缀名
                }]
            }
        },
        //js压缩
        uglify: {
            target: {
                files: [{
                    expand: true,       //展开下面*通配符匹配的文件
                    cwd: 'F:/模板/dome/1/js/1/',     //源文件根目录
                    src: ['*.js', '!**/*.min.js'],  //不要做 “!” 指定的文件
                    dest: 'F:/模板/dome/1/js/1/',        //压缩文件的输出目录
                    ext: '.min.js'    //压缩文件的后缀名
                }]
            }
        }/*,
        //css语法检测
        csslint: {
            options:{
                csslintrc:'.csslint'
            },
            build:['F:/模板/dome/1/js/2/!*.css']
        },
        //js语法检测
        jshint:{
            options:{
                jshintrc:'.jshint'
            },
            build:['Gruntfile.js','F:/模板/dome/1/js/1/!*.js','!F:/模板/dome/1/js/1/!*.min.js'] //不检查压缩的js
        }*/
        /*  ,
        //watch自动化
      watch:{
            build:{
                files:['F:/模板/dome/1/js/1/!*.js','F:/模板/dome/1/js/2/!*.css'],
                tasks:['cssmin','uglify'],
                options:{spawn:false}
            }
        }*/

    });





    //告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-watch');


    //告诉grunt当我们在终端输入grunt时需要做些什么
    grunt.registerInitTask('default',['cssmin','uglify']);
};
