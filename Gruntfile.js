module.exports = function(grunt) {

  require('./tasks/build.js')(grunt);
  require('./tasks/watch.js')(grunt);
  require('./tasks/less.js')(grunt);
  require('./tasks/git.js')(grunt);
  require('./tasks/webpack.js')(grunt);

};
