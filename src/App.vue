<template>
  <div>
    <!--<h1>{{title}}</h1>
    <p>{{greeting()}}</p>
    <ninjas></ninjas>-->
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>

    <h1>************************************************************************************</h1>

    <br />

    <form-helper>
      <!--<h2 slot="title">{{titre}}</h2>
      <p slot="text">I Am The Paragraph Text For The Slot</p>-->
      <div slot="form-header">
        <h3>This is the title of the form !</h3>
        <p>Informations about the form ...</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>

      <div slot="form-controls">
        <button v-on:click="Submit">Submit</button>
      </div>
    </form-helper>

    <br />

    <h1>************************************************************************************</h1>
    <!--
    <form-one></form-one>
    <form-two></form-two>
    -->

    <button name="btn1" v-on:click="component = 'form-one' ">Show form one</button>
    <button name="btn2" v-on:click="component = 'form-two' ">Show form two</button>
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>

    <br />
    <br />
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
/* Nesting a component locally */
/*import Ninjas from "./Ninjas.vue";*/
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas";

import formHelper from "./components/formHelper.vue";

import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";

export default {
  components: {
    /*ninjas: Ninjas*/
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas,
    "form-helper": formHelper,
    "form-one": formOne,
    "form-two": formTwo
  },
  data() {
    return {
      /*title: "Our first vue page ! Aoh"
      title: "IMENE app"*/
      component: "form-one",
      ninjas: [
        { name: "MEKIDECHE Imene", speciality: "Vue components", show: false },
        {
          name: "AMOKRANE Abdennour",
          speciality: "HTML Wizardry",
          show: false
        },
        { name: "MEHERHERA Amina", speciality: "Click Events", show: false },
        { name: "MEK Aya", speciality: "Conditionals", show: false },
        { name: "MEK Houda", speciality: "Webpack", show: false },
        { name: "MEK Ikram", speciality: "Data Diggin", show: false }
      ],
      title: "Vue Ninjas",
      titre: "Dynamic slot title"

      //component: "form-one"
    };
  },
  methods: {
    /*greeting: function() {
      return "Hello Mimi :D !";
    }*/
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    },

    Submit: function() {
      alert("Submitted");
    }
  }
};
</script>
/*
<style scoped>
h1 {
  color: purple;
}
</style>
*/
