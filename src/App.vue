<template>
  <div id="app">
    <mainheader message="tada!" :path="parsedpath" />
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/about/sub">Sub About</router-link>
    <router-link to="/wpposts">Posts</router-link>


    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
    
  </div>
</template>

<script>
import mainheader from './components/Header.vue'

export default {
  name: 'app',
  computed: {
    parsedpath: function () {
      var currentpath = this.$route.path
      var newpath = currentpath.substring(1)
      var n = newpath.indexOf('/')
      newpath = newpath.substring(0, n !== -1 ? n : newpath.length)

      if (newpath === 'about') {
        return 'abouttheme'
      } else if (newpath === 'wpposts') {
        return 'poststheme'
      } else {
        return 'defaulttheme'
      }
    }
  },
  components: {
    'mainheader': mainheader
  }
}
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}

.slide-enter-active, .slide-leave-active {
  transition: 0.5s;
}




.slide-enter {
  transform: translateX(-100px);
  opacity: 0;
}

.slide-enter-to {
  transform: translateX(0px);
  opacity: 1;
}

.slide-leave {
  transform: translateX(0px);
  opacity: 1;
}

.slide-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

}
</style>
