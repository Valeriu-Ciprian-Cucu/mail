var tmpl = require('../templates/mail-list.html');
var store = require('../stores/AppState');

module.exports = {
  template: tmpl,
  data: function () {
    return {
      mails: store.mails
    }
  }
};
