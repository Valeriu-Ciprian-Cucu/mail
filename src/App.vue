<template>
  <folder-list></folder-list>
  <mail-list></mail-list>
  <mail-view></mail-view>
</template>

<script>
import FolderList from './FolderList.vue';
import MailList from './MailList.vue';
import MailView from './MailView.vue';

export default {
  components: { FolderList, MailList, MailView }
}
</script>

<style>
  html {
    height: 100%;
  }
  body {
    font-family: Helvetica, sans-serif;
    display: flex;
    flex-direction: row;
    height: 100%;
  }
</style>
