<template>
  <div>
    <h1>{{title}}</h1>
    <!--<p>{{greeting()}}</p>-->
    <ninjas></ninjas>
  </div>
</template>

<script>
/* Nesting a component locally */
import Ninjas from "./Ninjas.vue";

export default {
  components: {
    ninjas: Ninjas
  },
  data() {
    return {
      /*title: "Our first vue page ! Aoh"*/
      title: "IMENE app"
    };
  },
  methods: {
    /*greeting: function() {
      return "Hello Mimi :D !";
    }*/
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
