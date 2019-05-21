import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'

const moment = require('moment')

function initialize() {
  Vue.use(Vuetify)
  Vue.use(axios)
  Vue.use(require('vue-moment'), { moment })
  Vue.moment().locale('pt-br')
}

module.exports = {
  initialize
}
