<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <v-date-picker v-model="picker"></v-date-picker>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'About Your Vue.js App',
      headertheme: 'abouttheme',
      picker: null
    }
  },
  methods: {
    changeTheme: function () {
      this.$emit('changeSiteTheme', this.headertheme)
    }
  },
  created: function () {
    this.changeTheme()
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
