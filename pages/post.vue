<template>
  <div>
    <p>{{ posts }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //header table
      fields: ["title", "content", "actions"],
      //posts data
      posts: [],
    };
  },

  mounted() {
    //fething ke Rest API
    this.$axios
      .get("/api/posts")
      .then((response) => {
        //assign response ke state "posts"
        this.posts = response.data.data;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  },
};
</script>

<style>
</style>
