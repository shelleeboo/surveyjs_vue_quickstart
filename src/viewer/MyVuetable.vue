<template>
  <div>
  <vuetable ref="vuetable"
            api-url="https://vuetable.ratiw.net/api/users"
            :fields="fields"
            pagination-path=""
            @vuetable:pagination-data="onPaginationData"
  ></vuetable>
    <vuetable-pagination-info ref="paginationInfo"></vuetable-pagination-info>
    <vuetable-pagination ref="pagination"
                         @vuetable-pagination:change-page="onChangePage"
    ></vuetable-pagination>  </div>
</template>

<script>
  import Vuetable from 'vuetable-2'
  import moment from 'moment'
  import accounting from 'accounting'
  import VuetablePagination from 'vuetable-2/src/components/VuetablePaginationDropdown'
  import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'

  export default {
    name: 'MyVuetable',
    components: {
      Vuetable,
      VuetablePagination,
      VuetablePaginationInfo
    },
    data () {
      return {
        fields: [
          'name', 'email',
          {
            name: 'birthdate',
            titleClass: 'text-center',
            dataClass: 'text-center',
            callback: 'formatDate|YYYY-MM-DD'
          },
          {
            name: 'nickname',
            callback: 'allcap'
          },
          {
            name: 'gender',
            titleClass: 'text-center',
            dataClass: 'text-center',
            callback: 'genderLabel'
          },
          {
            name: 'salary',
            titleClass: 'text-center',
            dataClass: 'text-center',
            callback: 'formatNumber'

          }
        ]
      }
    },
    methods: {
      allcap (value) {
        return value.toUpperCase()
      },
      formatDate (value, fmt = 'D MMM YYYY') {
        return (value == null)
          ? ''
          : moment(value, 'YYYY-MM-DD').format(fmt)
      },
      genderLabel (value) {
        return value === 'M'
          ? '<span class="slsllabel label-info"><i class="glyphicon glyphicon-star"></i> Male</span>'
          : '<span class="label label-success"><i class="glyphicon glyphicon-heart"></i> Female</span>'
      },
      formatNumber (value) {
        return accounting.formatNumber(value, 2)
      },
      onPaginationData (paginationData) {
        this.$refs.pagination.setPaginationData(paginationData)
        this.$refs.paginationInfo.setPaginationData(paginationData)   // <----
      },
      onChangePage (page) {
        this.$refs.vuetable.changePage(page)
      }

    }
  }
</script>

<style scoped>
#app {
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
