var Vue = require('vue');
var App = require('./components/App.js');
var store = require('./stores/AppState');

window.store = store;

new Vue({
  el: 'body',
  components: {
    App: App
  }
});
