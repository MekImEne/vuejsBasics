<template>
  <div id="single-blog">
    <h1>{{ blog.title }}</h1>
    <!--<article>{{ blog.body }}</article>-->
    <article>{{ blog.content }}</article>
    <p>Author: {{ blog.author }}</p>
    <ul>
      <li v-for="category in blog.categories" v-bind:key="category.id">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },

  /*created() {
    this.$http
      .get("http://jsonplaceholder.typicode.com/posts/" + this.id)
      .then(function(data) {
        console.log(data);
        this.blog = data.body;
      });
  }*/
  created() {
    this.$http
      .get(
        "https://vuejs-playlist-13991.firebaseio.com/posts/" + this.id + ".json"
      )
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        this.blog = data;
      });
  }
};
</script>

<style scoped>
#single-blog {
  max-width: 960px;
  margin: 0 auto;
}
</style>
