<template>
  <div>
    <!--<h1>{{title}}</h1>
    <p>{{greeting()}}</p>
    <ninjas></ninjas>-->
    <app-header></app-header>
    <app-ninjas></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
/* Nesting a component locally */
/*import Ninjas from "./Ninjas.vue";*/
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas";

export default {
  components: {
    /*ninjas: Ninjas*/
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas
  },
  data() {
    return {
      /*title: "Our first vue page ! Aoh"
      title: "IMENE app"*/
    };
  }
  /*methods: {
    greeting: function() {
      return "Hello Mimi :D !";
    }
  }*/
};
</script>
/*
<style scoped>
h1 {
  color: purple;
}
</style>
*/
