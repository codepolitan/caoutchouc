//require('./utils/debug');

module.exports = {
  view: ['view/view.js'],
  list: ['view/list/list.js'],
  tree: ['view/tree/tree.js'],
  form: ['view/form/form.js'],
  'view-container': ['view/container.js'],

  container: ['container/container.js'],
  tab: ['container/tab.js'],

  window: ['window/window.js'],
  dialog: ['window/dialog.js'],
  prompt: ['window/prompt.js'],

  text: ['component/text.js'],
  component: ['component/component.js'],
  progress: ['component/progress.js'],
  binding: ['component/binding.js'],

  button: ['control/button.js'],
  upload: ['control/upload.js'],
  color: ['control/color.js'],
  date: ['control/date.js'],
  'button-menu': ['control/button-menu.js'],
  choice: ['control/choice.js'],
  search: ['control/search.js'],
  separator: ['control/separator.js'],

  border: ['selector/border.js'],
  context: ['menu/context.js'],
  toolbar: ['toolbar/toolbar.js'],
  layout: ['layout/layout.js'],
  selector: ['selector/selector.js'],

  control: ['icon/control.js'],
  app: ['icon/app.js'],
};
