import Vue from 'vue'
import App from './App.vue'
import Store from './Store.js';

var app = new Vue({
  el: 'body',
  components: { App },
  data: Store
});
