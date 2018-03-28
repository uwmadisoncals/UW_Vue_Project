<template>
<v-container grid-list-md text-xs-center>
  <v-layout row wrap>
    <v-flex xs4 v-for="post of posts" :key="post.id">
      <v-card>
        <div v-if="post._embedded['wp:featuredmedia']">
            <div v-if="post._embedded['wp:featuredmedia'][0].media_details.sizes['large']">
        <v-card-media :src="post._embedded['wp:featuredmedia'][0].media_details.sizes['large'].source_url" height="200px">
        </v-card-media>
            </div>
        </div>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0" v-html="post.title.rendered"></h3>
            <div v-html="post.excerpt.rendered"></div>
          </div>
        </v-card-title>
        <v-card-actions>
          <router-link :to="'/news/'+post.slug">Read</router-link>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    
    </v-flex>
  </v-layout>
</v-container>

</template>

<script>
export default {
  name: 'postitems',
  props: ['posts']
}

</script>


<style scoped>

/* Blog Styles */

.blogCardWrapper {
  display: flex;
  flex-wrap: wrap;
}

.blogCard {
  position: relative;
  display: inline-block;
    background:#fff;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
    margin:30px 0 0 2%;
    flex-grow: 1;
    height:auto;
    padding: 2rem;
    border-radius: 6px;
    width: calc(100% * (1/4) - 10px - 1px);
}

.blogCard h2 {
  margin-top: 0px;
}

.imgHolder {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 150px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.cardWithImage .blogTextHolder {
  margin-top: 150px;
}

.blogCard a {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index:5;
  font-size: 0px;
  border-radius: 6px;
  text-indent: -10000000px;
}

.blogCard a:hover {
  border: 2px solid #6fa8ef;
}

.imgFeature {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index:2;
}

.imgLoadCheck {
  display: none;
}

.previmgFeature {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: -100px;
  z-index:3;
  filter: blur(18px);
  opacity: 1;
  transition: opacity 1s;
}

.previmgFeature.fadeOut {
  opacity: 0;
}
</style>