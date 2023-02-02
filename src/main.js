import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// import { Button, Icon } from "element-ui";

// Vue.config.productionTip = false;
// Vue.use(Button);
// Vue.use(Icon);
// new Vue({
//   store,

//   render: h => h(App)
// }).$mount("#app");

// import Vue from 'vue';
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
