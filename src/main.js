import Vue from "vue";
//import App from './App.vue'
import Blog from "./Blog.vue";
import VueResource from "vue-resource";

/* Nesting a component globally
import Ninjas from './Ninjas.vue'
Vue.component('ninjas', Ninjas)
*/

/*Event Bus */
export const bus = new Vue();

/*
new Vue({
    el: '#app',
    render: h => h(App)
})

*/
new Vue({
    el: "#blog",
    render: h => h(Blog)
});
Vue.use(VueResource);