require('utils/debug');

module.exports = {
  view: {
    list: require('./view/list/list'),
    //form: require('./view/tree/tree'),
    //tree: require('./view/form/form'),
  },
  window: require('./window/window'),
  binding: require('./component/binding'),
  toolbar: require('./toolbar/toolbar'),
  container: require('./container/container'),
  layout: require('./layout/layout'),
  //prompt: require('./window/prompt'),
};
