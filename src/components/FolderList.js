var tmpl = require('../templates/folder-list.html');
var store = require('../stores/AppState');


module.exports = {
  template: tmpl,
  data: function () {
    return {
      folders: store.folders
    }
  }
};
