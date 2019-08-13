import BoxButton from "./components/BoxButton.vue"
import BoxEdit from "./components/BoxEdit.vue"
import BoxAlert from "./components/BoxAlert.vue"


export default {
  install(Vue, options) {
    Vue.component("box-button", BoxButton)
    Vue.component("box-edit", BoxEdit)
    Vue.component("box-alert", BoxAlert)
  }
};