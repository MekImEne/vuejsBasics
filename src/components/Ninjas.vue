<template>
  <div id="ninjas">
    <h1>List of Ninjas :</h1>

    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <h2>{{ ninja.name }}</h2>
        <h3 v-show="ninja.show">{{ ninja.speciality }}</h3>
      </li>
    </ul>

    <button v-on:click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>
export default {
  /*props: ["ninjas"],*/
  /*Validation of property*/
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      /* ninjas: ["Imene", "Abdennour", "Amina", "Aya"]*/
    };
  },
  methods: {
    deleteNinja: function() {
      this.ninjas.pop();
    }
  }

  // Lifecycle Hooks
  /*beforeCreate() {
    alert("Before Create !");
  },
  created() {
    alert("Created !");
  },
  beforeMount() {
    alert("Before mount !");
  },
  mounted() {
    alert("Mounted!");
  },
  beforeUpdate() {
    alert("Before Updated");
  },
  updated() {
    alert("updated");
  }*/
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
