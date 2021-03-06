#!/usr/bin/env node

'use strict';

require('colorful').colorful();
const gulp = require('gulp');
const program = require('commander');

program.on('--help', () => {
  console.log('  Usage:'.to.bold.blue.color);
  console.log();
});

program.parse(process.argv);

// const task = program.args[0]; // run compile
const task = program.args[1];

if (!task) {
  program.help();
} else {
  console.log('compile-tools run', task);
  
  require('../gulpfile');

  gulp.start(task);
}
