module.exports = function (grunt) {
  'use strict';

  function log(...messages) {
    console.log(...messages);
  }

  function getLocalIpAddress() {
    const os = require('os');
    const ifaces = os.networkInterfaces();
    let lookupIpAddress;
    for (const dev in ifaces) {
      if (dev != 'en1' && dev != 'en0') {
        continue;
      }
      ifaces[dev].forEach(function (details) {
        if (details.family == 'IPv4' && !lookupIpAddress) {
          lookupIpAddress = details.address;
        }
      });
      if (lookupIpAddress) {
        break;
      }
    }
    return lookupIpAddress;
  }

  const packageFile = 'package.json';

  grunt.registerTask('initGrunt', 'Load package.json and initConfig', () => {
    const wiredep = require('wiredep');

    function isPackageJsonValidFile(path) {
      try {
        const data = grunt.file.readJSON(path);
        return data && data.name && data.version;
      } catch (e) {
        return false;
      }
    }

    if (isPackageJsonValidFile(packageFile)) {
      gruntInit(packageFile);
    }

    function gruntInit(pkgFile) {
      const pkg = grunt.file.readJSON(pkgFile);
      const lessOptions = {
        paths   : ['assets/styles-less'],
        ieCompat: true,
        plugins : [
          new (require('less-plugin-autoprefix'))({ browsers: ['last 2 versions'] }),
        ],
      };
      const lessFiles = ((destPath) => {
        let fileName;
        let filePath;
        const files = {};

        grunt.file.expand('app/assets/styles-less/**/*.less').map((file) => {
          fileName = file.substring(file.lastIndexOf('/') + 1);
          filePath = file.replace('app/assets/styles-less/', '').replace(fileName, '');
          fileName = fileName.replace('.less', '.css');
          files[`${destPath}/assets/styles/${filePath + fileName}`] = file;
        });

        return files;
      });

      grunt.initConfig({
        clean: {
          dist: ['dist'],
        },

        injector: {
          options: {
            bowerPrefix: 'bower:',
          },
          bower_dependencies: {
            files: {
              'app/index.html': ['bower.json'],
            },
          },
          local_dependencies: {
            files: {
              'app/index.html': grunt.file.expand(['app/js/**/*.js', '!app/js/compiled-templates/**', '!app/js/**/modules/**/*.js']),
            },
          },
        },

        handlebars: {
          all: {
            options: {
              exportAMD      : true,
              returnAMD      : false,
              returnTemplates: true,
            },
            files: (() => {
              const files = {};
              const dirs = grunt.file.expand({ filter: 'isDirectory' }, 'app/templates/*');
              let dir;

              dirs.map((dirPath) => {
                dir = dirPath.substring(dirPath.lastIndexOf('/') + 1);
                files[`app/js/compiled-templates/${dir}.js`] = grunt.file.expand(`${dirPath}/**/*.hbs`);
              });
              return files;
            })(),
          },
        },

        requirejs: {
          compile: {
            options: {
              baseUrl: '.',
              out    : 'dist/js/bundle.js',
              include: grunt.file.expand(['app/js/**/*.js', '!app/js/compiled-templates/**', `!${pkg.moduleConfigFile}`]),
              paths  : (() => {
                const dependencies = wiredep({
                  directory: './bower_components',
                });
                const paths = {};
                let fileName;

                // load bower components
                Object.keys(dependencies).forEach((key) => {
                  if (key === 'js') {
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
              })(),
            },
          },
        },

        less: {
          dev: {
            options: {
              paths   : ['assets/styles-less'],
              ieCompat: true,
              plugins : [
                new (require('less-plugin-autoprefix'))({ browsers: ['last 2 versions'] }),
              ],
            },
            files: lessFiles('app/'),
          },
          prod: {
            options: Object.assign({}, lessOptions, {
              compress: true,
            }),
            files: lessFiles('dist/'),
          },
        },

        imagemin: {
          dynamic: {
            options: {
              optimizationLevel: 3,
            },
            files: [{
              expand: true,
              cwd   : 'app/img/',
              src   : ['**/*.{png,jpg,gif}'],
              dest  : 'dist/img/',
            }],
          },
        },

        copy: {
          main: {
            files: [
              {
                expand : true,
                src    : ['app/index.html'],
                dest   : 'dist/',
                filter : 'isFile',
                flatten: true,
              },
              {
                expand: true,
                cwd   : 'app/assets',
                src   : ['**', '!styles-less'],
                dest  : 'dist/',
              },
              {
                expand: true,
                cwd   : 'bower_components/requirejs',
                src   : ['require.js'],
                dest  : 'dist/js/',
              },
            ],
          },
        },

        connect: {
          server: {
            options: {
              directory  : grunt.option('directory') || '.',
              hostname   : pkg.serverHost || getLocalIpAddress(),
              cors       : true,
              port       : pkg.serverPort,
              openBrowser: pkg.openBrowser,
              livereload : true,
            },
          },
        },

        watch: {
          options: {
            livereload: true,
          },
          hbs: {
            files: [
              'Gruntfile.js',
              'app/templates/**/*.hbs',
              'app/js/**/*.js',
              'app/assets/styles-less/**/*.less',
              '!app/js/compiled-templates/**/*.js',
              `!${pkg.moduleConfigFile}`,
            ],
            tasks: ['default'],
          },
        },

        updateModuleConfig: {
          options: {
            pkg    : pkg,
            wiredep: wiredep,
          },
        },
      });
    }
  });

  grunt.registerTask('updateModuleConfig', function updateModuleConfig() {
    const options = this.options();
    const pkg = options.pkg;
    const configFile = grunt.file.read(pkg.moduleConfigFile).split('\n');
    const linesWithNo = {};
    const firstHalf = [];
    const lastHalf = [];
    let compiledTpls = '';
    const dependencies = options.wiredep({
      directory: './bower_components',
    });
    const pathsNotToInclude = {
      require: '',
    };
    let lineno;
    let line;
    let startLine;
    let endLine;
    let fileName;

    function concatExpandedFiles(file) {
      fileName = file.substring(file.lastIndexOf('/') + 1).replace('.js', '');
      compiledTpls = `${compiledTpls}\n    '${fileName}': '${file.replace('.js', '').replace('app/', '')}',`;
    }

    Object.keys(dependencies).forEach((key) => {
      if (key === 'js') {
        dependencies[key].map((path) => {
          fileName = path.substring(path.lastIndexOf('/') + 1).split('.')[0];
          if (!(fileName in pathsNotToInclude)) {
            compiledTpls = `${compiledTpls}\n    '${fileName}': '/${path.replace('.js', '')}',`;
          }
        });
      }
    });

    grunt.file.expand('app/js/compiled-templates/*.js').map(concatExpandedFiles);

    grunt.file.expand('app/js/**/modules/**/*.js').map(concatExpandedFiles);

    // include controllers
    grunt.file.expand('app/js/controllers/**/*.js').map(concatExpandedFiles);

    // find startLine & endLine
    configFile.map((kline, vlineno) => {
      linesWithNo[vlineno + 1] = kline;
      if (/\/\/ <include_paths>/.test(kline)) {
        startLine = vlineno + 1;
      } else if (/\/\/ <\/include_paths>/.test(kline)) {
        endLine = vlineno + 1;
      }
    });

        // get first half
    for (lineno in linesWithNo) {
      line = linesWithNo[lineno];
      if (lineno <= startLine) {
        firstHalf.push(line);
      }
      if (lineno >= endLine) {
        lastHalf.push(line);
      }
    }
    grunt.file.write(pkg.moduleConfigFile, `${firstHalf.join('\n')}\n${compiledTpls}\n${lastHalf.join('\n')}`);
  });

  grunt.registerTask('removeBowers', 'Removes bower_components from index.html', () => {
    const index = grunt.file.read('dist/index.html').split('\n');
    let lines = [];
    let line;

    function ignoreLinesAndGet(lines, regex) {
      const rlines = [];
      let startLine;
      let endLine;
      lines.map((line, lineNo) => {
        if (regex.test(line.trim())) {
          startLine = lineNo + 1;
        }
        if (!startLine || startLine && endLine) {
          rlines.push(line);
        }
        if (/<!-- endinjector -->/.test(line.trim()) && startLine && !endLine) {
          endLine = lineNo + 1;
        }
      });
      return rlines;
    }

    lines = ignoreLinesAndGet(index, /<!-- injector:bower:css -->/);
    lines = ignoreLinesAndGet(lines, /<!-- injector:bower:js -->/);

        // replace contents of index.html
    grunt.file.write('dist/index.html', lines.join('\n'));
  });

  grunt.registerTask('injectbuild', 'Injector for production build', () => {
    const options = {
      local_dependencies: {
        files: {
          'dist/index.html': ['dist/js/require.js', 'dist/js/bundle.js'],
        },
      },
    };
    grunt.config('injector.local_dependencies', options.local_dependencies);
    grunt.config('injector.options', { ignorePath: 'dist/', addRootSlash: false });
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
  grunt.registerTask('default', ['initGrunt', 'clean', 'handlebars:all', 'injector', 'updateModuleConfig', 'less:dev']);
  grunt.registerTask('serve', ['initGrunt', 'connect:server', 'watch']);
  grunt.registerTask('rjs', ['initGrunt', 'requirejs']);
  grunt.registerTask('build', ['initGrunt', 'clean', 'handlebars:all', 'requirejs', 'copy:main', 'injectbuild', 'less:prod', 'imagemin']);
};
