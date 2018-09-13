'use strict';

const path = require('path');
const merge2 = require('merge2');
const through2 = require('through2');
const gulp = require('gulp');
const transformLess = require('./transformLess');
const babel = require('gulp-babel');
const getBabelCommonConfig = require('./getBabelCommonConfig');
const ts = require('gulp-typescript');
const tsConfig = require('./getTSCommonConfig')();

const rimraf = require('rimraf');
const replaceLib = require('./replaceLib');
const stripCode = require('gulp-strip-code');
const tsDefaultReporter = ts.reporter.defaultReporter();
const cwd = process.cwd();
const libDir = path.join(cwd, 'lib');
const esDir = path.join(cwd, 'es');


function babelify(js, modules) {
  const babelConfig = getBabelCommonConfig(modules);
  delete babelConfig.cacheDirectory;
  if (modules === false) {
    babelConfig.plugins.push(replaceLib);
  }
  let stream = js.pipe(babel(babelConfig))
    .pipe(through2.obj(function z(file, encoding, next) {
      this.push(file.clone());
      if (file.path.match(/\/style\/index\.js/)) {
        const content = file.contents.toString(encoding);
        if (content.indexOf('\'react-native\'') !== -1) {
          // actually in antd-mobile@2.0, this case will never run,
          // since we both split style/index.mative.js style/index.js
          // but let us keep this check at here
          // in case some of our developer made a file name mistake ==
          next();
          return;
        }
        file.contents = new Buffer(content
          .replace(/\/style\/?'/g, '/style/css\'')
          .replace(/\.less/g, '.css'));
        file.path = file.path.replace(/index\.js/, 'css.js');
        this.push(file);
        next();
      } else {
        next();
      }
    }));
  if (modules === false) {
    stream = stream.pipe(stripCode({
      start_comment: '@remove-on-es-build-begin',
      end_comment: '@remove-on-es-build-end',
    }));
  }
  return stream.pipe(gulp.dest(modules === false ? esDir : libDir));
}

function compile(modules) {
  // 1）清除历史构建文件
  rimraf.sync(modules !== false ? libDir : esDir); 
  
  // 2）构建生成两种样式目录
  const less = gulp.src(['src/components/**/*.less'])
    .pipe(through2.obj(function (file, encoding, next) { //  through2({ objectMode: true }, fn(chunk, enc, callback))
      this.push(file.clone());
      if (file.path.match(/\/style\/index\.less$/)) {
        transformLess(file.path).then((css) => {// atool-build/lib/transformLess
          file.contents = new Buffer(css);
          file.path = file.path.replace(/\.less$/, '.css');
          this.push(file);
          next();
        }).catch((e) => {
          console.error(e);
        });
      } else {
        next();
      }
    }))
    .pipe(gulp.dest(modules === false ? esDir : libDir));
  
  // 3）拷贝图片资源
  const assets = gulp.src(['src/components/**/*.@(png|svg)']).pipe(gulp.dest(modules === false ? esDir : libDir));
  
  // 4）处理 tsx
  let error = 0;
  const source = [
    'src/components/**/*.tsx',
    'src/typings/**/*.d.ts',
  ];
  // allow jsx file in components/xxx/
  if (tsConfig.allowJs) {// 与 最外层的 tsconfig.js 
    source.unshift('src/components/**/*.jsx');
  }
  const tsResult = gulp.src(source).pipe(ts(tsConfig, {// ts = require('gulp-typescript');
    error(e) {
      tsDefaultReporter.error(e);
      error = 1;
    },
    finish: tsDefaultReporter.finish,
  }));

  function check() {
    if (error && !argv['ignore-error']) {
      process.exit(1);
    }
  }

  tsResult.on('finish', check);
  tsResult.on('end', check);
  const tsFilesStream = babelify(tsResult.js, modules);
  const tsd = tsResult.dts.pipe(gulp.dest(modules === false ? esDir : libDir));
  // 合并 streams 成为一个 stream 以供下次链式使用??
  return merge2([less, tsFilesStream, tsd, assets]);
}

gulp.task('compile', ['compile-with-es'], () => {
  compile();
});
gulp.task('compile-with-es', () => {
  compile(false);
});
