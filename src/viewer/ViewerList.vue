<template>
<div>This is for a list of Surveys assisted to the currently logged in person.</div>
  <user-table/>
</template>

<script>
  import UserTable from '../components/vuetable/UserTable'

  export default {
    name: 'ViewerList',
    components: {
      UserTable
    }
  }
</script>

<style scoped>

</style>
