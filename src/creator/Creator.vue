<template>
  <div class="creator-container">
    <survey-creator></survey-creator>
  </div>
</template>

<script>
  // In your VueJS App.vue or yourComponent.vue file add these lines to import
  import SurveyCreator from '@/components/SurveyCreator'
  import * as SurveyVue from 'survey-vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import * as widgets from 'surveyjs-widgets'

  var Survey = SurveyVue.Survey
  Survey.cssType = 'bootstrap'

  widgets.icheck(SurveyVue)
  widgets.select2(SurveyVue)
  widgets.inputmask(SurveyVue)
  widgets.jquerybarrating(SurveyVue)
  widgets.jqueryuidatepicker(SurveyVue)
  widgets.nouislider(SurveyVue)
  widgets.select2tagbox(SurveyVue)
  widgets.signaturepad(SurveyVue)
  widgets.sortablejs(SurveyVue)
  widgets.ckeditor(SurveyVue)
  widgets.autocomplete(SurveyVue)
  widgets.bootstrapslider(SurveyVue)

  export default {
    name: 'Creator',
    components: {SurveyCreator}
  }
</script>

<style scoped>

</style>

