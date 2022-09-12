import Vue from 'vue'

export default () => {
  Vue.filter('address-format', function (value) {
    const splitedAddress = value.trim().split(' ')
    const addressNumber = splitedAddress[0]
    const addressName = splitedAddress.slice(1, splitedAddress.length).join(' ')
    return `${addressName}, ${addressNumber}`
  })
}
