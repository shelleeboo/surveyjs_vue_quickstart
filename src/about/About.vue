<template>
  <div>
<h1>This is the about page.</h1>
  <div class="ui container">
    <my-vuetable></my-vuetable>
  </div>
  </div>
</template>

<script>
  import MyVuetable from '../viewer/MyVuetable'

  export default {
    name: 'About',
    components: {
      MyVuetable
    }
  }
</script>

<style scoped>

</style>
