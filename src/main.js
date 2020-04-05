import Vue from 'vue'
import App from './App.vue'
/* Nesting a component globally
import Ninjas from './Ninjas.vue'
Vue.component('ninjas', Ninjas)
*/

/*Event Bus */
export const bus = new Vue();


new Vue({
    el: '#app',
    render: h => h(App)
})
