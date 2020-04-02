var first = new Vue({
    el: '#vue-app',
    data: {
        title: 'Vue app ONE',
        name: 'Imene',
        job: 'Student',
        website: 'https://www.thenetninja.co.uk',
        websiteTag: '<a href="https://www.thenetninja.co.uk">The Net Ninja Website</a>',
        age: 20,
        x: 0,
        y: 0,

        a: 0,
        b: 0,

        available: false,
        nearby: false,

        error: false,
        success: false,

        characters: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [{
                name: 'Mimi',
                age: 24
            },
            {
                name: 'Yoshi',
                age: 34
            },
            {
                name: 'Ken',
                age: 44
            }
        ]
    },
    methods: {
        greet: function(time) {
            return "Good " + time + " " + this.name + " !";
        },

        add: function(inc) {
            this.age += inc;
        },
        substract: function(dec) {
            this.age -= dec;
        },

        updateXY: function(event) {
            this.x = event.offsetX;
            this.y = event.offsetY;
        },

        click: function() {
            alert('You clicked me !');
        },

        logName: function() {
            console.log('You entered your name');
        },

        logAge: function() {
            console.log('You entered your age');
        },
        /*addToA: function() {
            return this.a + this.age;
        },
        addToB: function() {
            return this.b + this.age;
        }*/
    },
    computed: {
        addToA: function() {
            console.log('add to a')
            return this.a + this.age;
        },
        addToB: function() {
            console.log('add to b')
            return this.b + this.age;
        },


        compClasses: function() {
            return {
                available: this.available,
                nearby: this.nearby
            }
        }
    }
});


var second = new Vue({
    el: '#game',
    data: {
        title: 'Vue app TWO',
        health: 100,
        ended: false
    },
    methods: {
        changeTitle: function() {
            first.title = "This is the first title changed ! ";
        },
        punch: function() {
            this.health -= 10;
            if (this.health <= 0) {
                this.ended = true;
            }
        },
        restart: function() {
            this.health = 100;
            this.ended = false;
        }

    },
    computed: {}
});
