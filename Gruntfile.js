module.exports = function(grunt) {

  require('./tasks/build.js')(grunt);
  require('./tasks/watch.js')(grunt);
  require('./tasks/less.js')(grunt);

};
