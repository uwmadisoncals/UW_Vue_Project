<template>
  <div :class='["headerContainer", path]'>
    Navigation - {{ message }} - {{ path }}
    <img src="../assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'mainheader',
  props: ['message', 'path']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {

}

.headerContainer {
  padding-top: 50px;
  padding-bottom: 50px;
  transition: 0.6s;
}

.poststheme {
  background: rgba(0,0,0,0.2);
}

.abouttheme {
  background: pink;
}
</style>