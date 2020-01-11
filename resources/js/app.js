require('./bootstrap');
import Vue from "vue";
import App from "./App";
import router from "./router/router";
import store from "./store/store";

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
