<template>
  <div class="MailView">
    {{ Store.mailContent }}
  </div>
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
  .MailView {
    width: 45%;
    padding: 2px;
  }
</style>
