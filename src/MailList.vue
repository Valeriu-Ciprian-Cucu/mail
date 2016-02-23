<template>
  <ul class="MailList">
    <li
      class="MailList__Item"
      v-for="mail in Store.mails"
      @click="setMailContent(mail.text)">
      {{ mail.subject }}
    </li>
  </ul>
</template>

<script>
import Store from './Store.js';

export default {
  data () {
    return {
      Store: Store
    }
  },
  methods: {
    setMailContent (text) {
      Store.mailContent = text;
    }
  }
}

</script>

<style>
  .MailList {
    list-style: none;
    width: 35%;
    border-left: solid 1px #000;
    border-right: solid 1px #000;
    padding: 2px;
  }
</style>
