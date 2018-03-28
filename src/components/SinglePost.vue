<template>
    <div>
        <h1 v-if="thePost.title" v-html="thePost.title.rendered"></h1>
        <div v-if="thePost.content" v-html="thePost.content.rendered"></div>
    </div>
</template>


<script>
import axios from "axios";
import spinner from "./Spinner.vue";

export default {
  name: "singlepost",
  data() {
    return {
      thePost: [],
      errors: [],
      headertheme: "poststheme",
      isLoading: "no"
    };
  },
  components: {
    spinner: spinner
  },
  created: function() {
    //change site theme for page
    this.changeTheme();

    this.isLoading = "yes";

    console.log(this.$route.params.id);

    //retrieve posts
    axios
      .get(
        `https://news.wisc.edu/wp-json/wp/v2/posts/?_embed&slug=${
          this.$route.params.id
        }`
      )
      .then(response => {
        // JSON responses are automatically parsed.
        this.thePost = response.data[0];
        this.isLoading = "no";
        this.setHeaderImage();
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    changeTheme: function() {
      this.$emit("changeSiteTheme", this.headertheme);
    },
    setHeaderImage: function() {
      const post = this.thePost;

      if (
        post._embedded["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"][0].media_details &&
        post._embedded["wp:featuredmedia"][0].media_details.sizes
      ) {
        var imgsrc =
          post._embedded["wp:featuredmedia"][0].media_details.sizes.full
            .source_url;
        var previmgsrc =
          post._embedded["wp:featuredmedia"][0].media_details.sizes.medium
            .source_url;

        if (imgsrc) {
          this.$emit("changeSiteTheme", this.headertheme, imgsrc, previmgsrc);
        } else {
          console.log("sending nothing");
        }
      }
    }
  }
};
</script>


<style>

</style>