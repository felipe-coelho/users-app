import Vue from 'vue'

export default () => {
  Vue.filter('date-format', function (value) {
    return new Date(value).toLocaleDateString('pt-BR')
  })
}
