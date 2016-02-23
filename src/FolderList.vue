<template>
  <ul class="FolderList">
    <li clas="FolderList__Item" v-for="folder in Store.folders">{{ folder }}</li>
  </ul>
</template>

<script>
import Store from './Store.js';

export default {
  data () {
    return {
      Store: Store
    }
  }
}

</script>

<style>
  .FolderList {
    list-style: none;
    width: 20%;
    padding: 2px;
  }
</style>
