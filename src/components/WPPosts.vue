<template>
  <div class="hello">
    <h1>Posts</h1>
    
    <postitem :posts = 'thePosts' />
    
    <ul v-if="errors && errors.length">
        <li v-for="error of errors">
            {{error.message}}
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import postitem from './PostItem.vue'

export default {
  name: 'wpposts',
  data () {
    return {
      thePosts: [],
      errors: []
    }
  },
  components: {
    'postitem': postitem
  },
  created: function () {
    axios.get(`https://alnemec.com/wp-json/wp/v2/posts/?_embed`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.thePosts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
