var FolderList = require('./FolderList');
var MailList = require('./MailList');
var MailView = require('./MailView');
var tmpl = require('../templates/app.html');


module.exports = {
  components: {
    FolderList: FolderList,
    MailList: MailList,
    MailView: MailView
  },
  template: tmpl
};
