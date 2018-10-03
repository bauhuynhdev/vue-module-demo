import $ from 'jquery'

export default {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        console.log($('#vue-module-demo').text())
      }
    }),
      Vue.component('vue-module-demo', {
        template: '<h1 id="vue-module-demo">Jquery vue module demo</h1>'
      })
  }
}