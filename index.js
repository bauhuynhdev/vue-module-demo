export default {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        console.log('Vue-module-demo')
      }
    }),
      Vue.component('vue-module-demo', {
        template: '<h1>Vue module demo</h1>'
      })
  }
}