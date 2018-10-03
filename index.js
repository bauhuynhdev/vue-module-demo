import $ from 'jquery'

export default {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        $.fn.vueModuleDemo = function () {
          return this.css({
            color: 'red'
          })
        }
      }
    }),
      Vue.component('vue-module-demo', {
        template: '<h1 id="vue-module-demo">Jquery vue module demo</h1>'
      })
  }
}