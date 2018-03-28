<template>
  <div class="wpPosts">
    <h1>News</h1>

    <spinner :loading = 'isLoading' />
    <showposts :posts = 'thePosts' />

    <ul v-if="errors && errors.length">
        <li v-for="error of errors">
            {{error.message}}
        </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import postitems from "./PostItem.vue";
import spinner from "./Spinner.vue";

export default {
  name: "wpposts",
  data() {
    return {
      thePosts: [],
      errors: [],
      headertheme: "poststheme",
      isLoading: "no"
    };
  },
  components: {
    showposts: postitems,
    spinner: spinner
  },
  created: function() {
    //change site theme for page
    this.changeTheme();

    this.isLoading = "yes";

    //retrieve posts
    axios
      .get(`https://news.wisc.edu/wp-json/wp/v2/posts/?_embed`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.thePosts = response.data;
        this.isLoading = "no";
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    changeTheme: function() {
      this.$emit("changeSiteTheme", this.headertheme);
    }
  }
};
</script>


<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
