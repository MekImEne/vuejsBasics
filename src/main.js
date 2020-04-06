import Vue from "vue"
//import App from './App.vue'
import Blog from "./Blog.vue"
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

//setting-up routing

const router = new VueRouter({
    routes: Routes
});

//Custom directives :

Vue.directive("rainbow", {
    bind(el, binding, vnode) {
        el.style.color =
            "#" +
            Math.random()
            .toString(16)
            .slice(2, 8);
    }
});

Vue.directive("theme", {
    bind(el, binding, vnode) {
        if (binding.value == "wide") {
            el.style.maxWidth = "1200px";
        } else if (binding.value == "narrow") {
            el.style.maxWidth = "560px";
        }

        if (binding.arg == "column") {
            el.style.background = "#ddd";
            el.style.padding = "20px";
        }
    }
});

// Flters :

Vue.filter("to-uppercase", function(value) {
    return value.toUpperCase();
});

Vue.filter("snippet", function(value) {
    return value.slice(0, 100) + "...";
});

/* Nesting a component globally
import Ninjas from './Ninjas.vue'
Vue.component('ninjas', Ninjas)
*/

// Event Bus
export const bus = new Vue();

/*
new Vue({
    el: '#app',
    render: h => h(App)
})

*/
new Vue({
    el: "#blog",
    render: h => h(Blog),
    router: router
});