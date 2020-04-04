<template>
  <div id="ninjas">
    <h1>List of Ninjas :</h1>
    <ul>
      <li v-for="ninja in ninjas" v-bind:key="ninja" v-on:click="ninja.show = !ninja.show">
        <h2>{{ninja.name}}</h2>
        <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* ninjas: ["Imene", "Abdennour", "Amina", "Aya"]*/

      ninjas: [
        {
          name: "MEKIDECHE Imene",
          speciality: "Vue components",
          show: false
        },
        {
          name: "AMOKRANE Abdennour",
          speciality: "HTML Wizardry",
          show: false
        },
        {
          name: "MEHERHERA Amina",
          speciality: "Click Events",
          show: false
        },
        {
          name: "MEK Aya",
          speciality: "Conditionals",
          show: false
        },
        {
          name: "MEK Houda",
          speciality: "Webpack",
          show: false
        },
        {
          name: "MEK Ikram",
          speciality: "Data Diggin",
          show: false
        }
      ]
    };
  }
};
</script>

<style scoped>
#ninjas {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}

ul {
  display: felx;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>

