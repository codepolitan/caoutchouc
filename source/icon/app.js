(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  }
}(this, function() {

  /**
   * map app name with ui-icon-
   */
  return {
    template: 'mdi-app-template',
    news: 'mdi-app-news',
    files: 'mdi-app-files',
    cases: 'minimal-icon-folder-open',
    customers: 'mdi-social-people',
    course: 'mdi-social-school',
    sessions: 'mdi-social-group-add',
    jobs: 'minimal-icon-briefcase',
    datatype: 'minimal-icon-cubes',
    export: 'mdi-file-file-download',
    hds_accounts: 'mdi-social-domain',
    accounts: 'mdi-social-domain',
    website: 'mdi-action-explore',
    content: 'mdi-action-description',
    inventory: 'mdi-action-description',
    items: 'mdi-action-description',
    mail: 'mdi-maps-local-post-office',
    lists: 'mdi-action-list',
    messages: 'mdi-communication-message',
    tracker: 'mdi-action-track-changes',
    contacts: 'mdi-communication-contacts',
    participants: 'mdi-communication-contacts',
    directory: 'mdi-action-bookmark',
    mailing: 'mdi-content-send',
    invoices: 'mdi-action-receipt',
    sprints: 'mdi-action-run',
    quotes: 'mdi-action-receipt',
    orders: 'mdi-action-receipt',
    changes: 'mdi-action-assignment-turned-in',
    resources: 'mdi-social-people',
    activity: 'mdi-maps-traffic',
    places: 'mdi-maps-place',
    agenda: 'mdi-action-event',
    backup: 'mdi-action-dns',
    inbox: 'mdi-content-inbox',
    desktop: 'mdi-action-open-in-browser',
    logs: 'mdi-action-list',
    ticket: 'mdi-action-input',
    trash: 'mdi-action-delete',
    shares: 'mdi-social-share',
    users: 'mdi-action-account-box',
    roles: 'mdi-action-assignment-ind',
    document: 'mdi-action-description'
  };

}));
