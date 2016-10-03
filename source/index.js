require('debug');

var ui = {
  window: require('./window/window'),
  binding: require('./component/binding'),
  toolbar: require('./toolbar/toolbar'),
  container: require('./container/container'),
  layout: require('./layout/layout'),
  //prompt: require('./window/prompt'),
};

module.exports = ui;
