<template>
  <div>
    <blog-header></blog-header>
    <!--<add-blog></add-blog>-->
    <!--<show-blogs></show-blogs>-->
    <!--<list-blogs></list-blogs>-->
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
import listBlogs from "./components/listBlogs.vue";
import header from "./components/head.vue";

export default {
  components: {
    "add-blog": addBlog,
    "show-blogs": showBlogs,
    "list-blogs": listBlogs,
    "blog-header": header
  },
  data() {
    return {};
  },

  methods: {}
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>
