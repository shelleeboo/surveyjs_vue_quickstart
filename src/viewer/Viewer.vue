<template>
  <div id="viewer_container">
    <!-- If you want to show survey, uncomment the line below -->
    <survey :survey="survey"></survey>

  </div>
</template>

<script>
  // In your VueJS App.vue or yourComponent.vue file add these lines to import
  import * as SurveyVue from 'survey-vue'
  import 'bootstrap/dist/css/bootstrap.css'

var Survey = SurveyVue.Survey
  Survey.cssType = 'bootstrap'

// If you want to add custom widgets package
// Add these imports
import * as widgets from 'surveyjs-widgets'
 // And initialize widgets you are want ti use
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
    name: 'Viewer',
    components: {
      Survey
    },
    data () {
      // Define Survey JSON
      // Here is the simplest Survey with one text question
      var json =
        {
          'pages': [
            {
              'name': 'page1',
              'elements': [
                {
                  'type': 'matrix',
                  'name': 'question1',
                  'columns': [
                    'Column 1',
                    'Column 2',
                    'Column 3'
                  ],
                  'rows': [
                    'Row 1',
                    'Row 2'
                  ]
                },
                {
                  'type': 'matrixdropdown',
                  'name': 'question2',
                  'columns': [
                    {
                      'name': 'Column 1'
                    },
                    {
                      'name': 'Column 2'
                    },
                    {
                      'name': 'Column 3'
                    }
                  ],
                  'choices': [
                    1,
                    2,
                    3,
                    4,
                    5
                  ],
                  'rows': [
                    'Row 1',
                    'Row 2'
                  ]
                },
                {
                  'type': 'multipletext',
                  'name': 'question3',
                  'items': [
                    {
                      'name': 'text1'
                    },
                    {
                      'name': 'text2'
                    }
                  ]
                }
              ]
            }
          ]
        }

    // Create the model and pass it into VueSJ Survey component
      var model = new SurveyVue.Model(json)
      // You may set model properties
      // model.mode="display"

      return {
        survey: model
      }
    }
  }
</script>
