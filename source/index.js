require('./utils/debug');

module.exports = {
  view: require('./view/view'),
  list: require('./view/list/list'),
  form: require('./view/tree/tree'),
  tree: require('./view/form/form'),
  container: require('./view/container'),

  container: require('./container/container'),
  tab: require('./container/tab'),

  window: require('./window/window'),
  dialog: require('./window/dialog'),
  prompt: require('./window/prompt'),

  text: require('./component/text'),
  component: require('./component/component'),
  progress: require('./component/progress'),
  binding: require('./component/binding'),

  button: require('./control/button'),
  upload: require('./control/upload'),
  color: require('./control/color'),
  date: require('./control/date'),
  'button-menu': require('./control/button-menu'),
  choice: require('./control/choice'),
  search: require('./control/search'),

  border: require('./selector/border'),
  context: require('./menu/context'),
  toolbar: require('./toolbar/toolbar'),
  layout: require('./layout/layout'),
  selector: require('./selector/selector'),

  control: require('./icon/control'),
  app: require('./icon/app'),
};
