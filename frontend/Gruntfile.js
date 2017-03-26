'use strict';

module.exports = function (grunt) {
    
    function log(...messages) {
        console.log(...messages);
    }

    let packageFile = 'package.json';

    grunt.registerTask('initGrunt', 'Load package.json and initConfig', () => {
        let wiredep = require('wiredep');

        function isPackageJsonValidFile(path) {
            try {
                let data = grunt.file.readJSON(path);
                return data && data.name && data.version;
            } catch(e) {
                return false;
            }
        }

        if(isPackageJsonValidFile(packageFile)) {
            gruntInit(packageFile);
        }

        function gruntInit(pkgFile) {
            let pkg = grunt.file.readJSON(pkgFile);
            let lessOptions = {
                paths: ['assets/styles-less'],
                ieCompat: true,
                plugins: [
                    new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
                ]
            };
            let lessFiles = ((destPath) => {
                let fileName;
                let files = {};

                grunt.file.expand('app/assets/styles-less/*.less').map((file) => {
                    fileName = file.substring(file.lastIndexOf('/')).replace('.less', '.css');
                    files[`${destPath}/assets/styles/${fileName}`] = file;
                });

                return files;
            });

            grunt.initConfig({
                clean: {
                    dist: ['dist']
                },

                injector: {
                    options: {
                        bowerPrefix: 'bower:'
                    },
                    bower_dependencies: {
                        files: {
                            'app/index.html': ['bower.json']
                        }
                    },
                    local_dependencies: {
                        files: {
                            'app/index.html': grunt.file.expand(['app/js/**/*.js', '!app/js/compiled-templates/**', '!app/js/**/modules/**/*.js'])
                        }
                    }
                },

                /*handlebars: {
                    compile: {
                        options: {
                            namespace: function(filename) {
                                var names = filename.replace(/app\/(.*)(\/\w+\.hbs)/, '$1');
                                return names.split('/').join('.');
                            },
                            amd: true,
                            node: true
                        },
                        files: (() => {
                            let files = {};
                            let dirs = grunt.file.expand({filter: 'isDirectory'}, 'app/templates/*');
                            let dir;

                            dirs.map((dirPath) => {
                                dir = dirPath.substring(dirPath.lastIndexOf('/') + 1);
                                files[`app/js/compiled-templates/${dir}.js`] = grunt.file.expand(`${dirPath}/*.hbs`);
                            });
                            return files;
                        })()
                    },
                },*/
                handlebars: {
                    all: {
                        options: {
                            exportAMD: true,
                            returnAMD: false,
                            returnTemplates: true
                        },
                        files: (() => {
                            let files = {};
                            let dirs = grunt.file.expand({filter: 'isDirectory'}, 'app/templates/*');
                            let dir;

                            dirs.map((dirPath) => {
                                dir = dirPath.substring(dirPath.lastIndexOf('/') + 1);
                                files[`app/js/compiled-templates/${dir}.js`] = grunt.file.expand(`${dirPath}/*.hbs`);
                            });
                            return files;
                        })()
                    }
                },

                requirejs: {
                    compile: {
                        options: {
                            baseUrl: '.',
                            out: 'dist/js/bundle.js',
                            include: grunt.file.expand(['app/js/**/*.js', '!app/js/compiled-templates/**', `!${pkg.moduleConfigFile}`]),
                            paths: (()=> {
                                let dependencies = wiredep({
                                    directory: './bower_components'
                                });
                                let paths = {};
                                let fileName;

                                // load bower components
                                Object.keys(dependencies).forEach((key) => {
                                    if(key === 'js') {
                                        dependencies[key].map((path) => {
                                            fileName = path.substring(path.lastIndexOf('/') + 1).split('.')[0];
                                            paths[fileName] = path.replace('.js', '');
                                        });
                                    }
                                });

                                // load compiled templates
                                grunt.file.expand('app/js/compiled-templates/**/*.js').map((file) => {
                                    fileName = file.substring(file.lastIndexOf('/') + 1).replace('.js', '');
                                    paths[fileName] = file.replace('.js', '');
                                });

                                return paths;
                            })()
                        }
                    }
                },

                less: {
                    dev: {
                        options: {
                            paths: ['assets/styles-less'],
                            ieCompat: true,
                            plugins: [
                                new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
                            ]
                        },
                        files: lessFiles('app/')
                    },
                    prod: {
                        options: Object.assign({}, lessOptions, {
                            compress: true
                        }),
                        files: lessFiles('dist/')
                    }
                },

                imagemin: {
                    dynamic: {
                        options: {
                            optimizationLevel: 3
                        },
                        files: [{
                            expand: true,
                            cwd: 'app/img/',
                            src: ['**/*.{png,jpg,gif}'],
                            dest: 'dist/img/'
                        }]
                    }
                },

                copy: {
                    main: {
                        files: [
                            {
                                expand: true,
                                src: ['app/index.html'],
                                dest: 'dist/',
                                filter: 'isFile',
                                flatten: true
                            },
                            {
                                expand: true,
                                cwd: 'app/assets',
                                src: ['**', '!styles-less'],
                                dest: 'dist/',
                            },
                            {
                                expand: true,
                                cwd: 'bower_components/requirejs',
                                src: ['require.js'],
                                dest: 'dist/js/'
                            }
                        ]
                    }
                },

                connect: {
                    server: {
                        options: {
                            directory: grunt.option('directory') || '.',
                            hostname: pkg.serverHost,
                            cors: true,
                            port: pkg.serverPort,
                            openBrowser: pkg.openBrowser,
                            livereload: true
                        }
                    }
                },

                watch: {
                    options: {
                        livereload: true
                    },
                    hbs: {
                        files: [
                            'Gruntfile.js',
                            'app/templates/**/*.hbs',
                            'app/js/**/*.js', 
                            'app/assets/styles-less/**/*.less',
                            '!app/js/compiled-templates/**/*.js',
                            `!${pkg.moduleConfigFile}`
                        ],
                        tasks: ['default']
                    }
                },

                updateModuleConfig: {
                    options: {
                        pkg: pkg
                    }
                }
            });
        }
    });

    grunt.registerTask('updateModuleConfig', function() {
        let options = this.options();
        let pkg = options.pkg;
        let configFile = grunt.file.read(pkg.moduleConfigFile).split('\n');
        let linesWithNo = {};
        let firstHalf = [];
        let lastHalf = [];
        let compiledTpls = '';
        let lineno;
        let line;
        let startLine;
        let endLine;
        let fileName;

        grunt.file.expand('app/js/compiled-templates/*.js').map((file) => {
            fileName = file.substring(file.lastIndexOf('/')+1).replace('.js', '');
            compiledTpls = `      '${fileName}': '${file.replace('.js', '').replace('app/', '')}',\n${compiledTpls}`;
        });

        grunt.file.expand('app/js/**/modules/**/*.js').map((file) => {
            fileName = file.substring(file.lastIndexOf('/')+1).replace('.js', '');
            compiledTpls = `      '${fileName}': '${file.replace('.js', '').replace('app/', '')}',\n${compiledTpls}`;
        });

        // find startLine & endLine
        configFile.map((line, lineno) => {
            linesWithNo[lineno+1] = line;
            if(/\/\/ \<include\_paths\>/.test(line)) {
                startLine = lineno + 1;
            } else if(/\/\/ \<\/include\_paths\>/.test(line)) {
                endLine = lineno + 1;
            }
        });

        // get first half
        for(lineno in linesWithNo) {
            line = linesWithNo[lineno];
            if(lineno <= startLine) {
                firstHalf.push(line);
            }
            if(lineno >= endLine) {
                lastHalf.push(line);
            }
        }
        grunt.file.write(pkg.moduleConfigFile, `${firstHalf.join('\n')}\n${compiledTpls}\n${lastHalf.join('\n')}`);
    });

    grunt.registerTask('removeBowers', 'Removes bower_components from index.html', () => {
        let index = grunt.file.read('dist/index.html').split('\n');
        let lines = [];
        let line;

        function ignoreLinesAndGet(lines, regex) {
            let rlines = [];
            let startLine;
            let endLine;
            lines.map((line, lineNo) => {
                if(regex.test(line.trim())) {
                    startLine = lineNo + 1;
                }
                if(!startLine || startLine && endLine) {
                    rlines.push(line);
                }
                if(/\<\!\-\- endinjector \-\-\>/.test(line.trim()) && startLine && !endLine) {
                    endLine = lineNo + 1;
                }
            });
            return rlines;
        }

        lines = ignoreLinesAndGet(index, /\<\!\-\- injector\:bower\:css \-\-\>/);
        lines = ignoreLinesAndGet(lines, /\<\!\-\- injector\:bower\:js \-\-\>/);

        // replace contents of index.html
        grunt.file.write('dist/index.html', lines.join('\n'));
        
    });

    grunt.registerTask('injectbuild', 'Injector for production build', () => {
        let options = {
            local_dependencies: {
                files: {
                    'dist/index.html': ['dist/js/require.js', 'dist/js/bundle.js']
                }
            }
        }
        grunt.config('injector.local_dependencies', options.local_dependencies);
        grunt.config('injector.options', {ignorePath: 'dist/', addRootSlash: false});
        grunt.task.run(['injector', 'removeBowers']);
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-injector');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-handlebars-compiler');

    // default is build
    grunt.registerTask('default', ['initGrunt', 'clean', 'injector', 'handlebars:all', 'updateModuleConfig', 'less:dev']);
    grunt.registerTask('serve', ['initGrunt', 'connect:server', 'watch']);
    grunt.registerTask('rjs', ['initGrunt', 'requirejs']);
    grunt.registerTask('build', ['initGrunt', 'clean', 'handlebars:all', 'requirejs', 'copy:main', 'injectbuild', 'less:prod', 'imagemin']);
}