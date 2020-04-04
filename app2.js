Vue.component('greeting', {
    template: '<p>Hey there ! I am {{name}}. <button v-on:click="changeName">Change Name</button></p>',
    data: function() {
        return {
            name: 'IMENE'
        }
    },
    methods: {
        changeName: function() {
            this.name = 'MIMI';
        }
    }
});

new Vue({
    el: "#vue-app-one"
});
new Vue
    ({
        el: "#vue-app-two"
    });
