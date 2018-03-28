<template>
  <div :class='["headerContainer", theme]'>

    <div class="headerContent">

    <homeheader />

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
         <v-flex xs6>
           <img src="../assets/logo.png">
            Navigation - {{ message }} - {{ theme }} - {{ bgimg }} - {{ prevbgimg }}
         </v-flex>

         <v-flex xs6>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/about/sub">Sub About</router-link>
          <router-link to="/news">News</router-link>
          <themebutton />
         </v-flex>
      </v-layout>
    </v-container>

    </div>
    <div class="previewImage" :style="{backgroundImage: 'url('+prevbgimg+')'}"></div>
    <div class="fullImage" :style="{backgroundImage: 'url('+bgimg+')'}"></div>

  </div>
</template>


<script>
import themebutton from "./ThemeButton.vue";
import homeheader from "./HomeHeader.vue";
import imagesLoaded from "vue-images-loaded";

export default {
  name: "mainheader",
  props: ["message", "theme", "bgimg", "prevbgimg"],
  directives: {
    imagesLoaded
  },
  components: {
    themebutton: themebutton,
    homeheader: homeheader
  }
};
</script>


<style>
.previewImage,
.fullImage {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.previewImage {
  filter: blur(12px);
}

.fullImage {
  z-index: 2;
}

.headerContent {
  position: relative;
  z-index: 5;
}

.headerContainer {
  transition: 0.6s;
  overflow: hidden;
  position: relative;
}

.poststheme {
  background: rgba(0, 0, 0, 0.2);
}

.headerContainer.abouttheme {
  background: pink;
}

/* header */
canvas {
  width: 100%;
  height: 100%;
}

.headerContent {
  padding-bottom: 2rem;
  position: relative;
  z-index: 5;
}

.headerContentInner {
  position: relative;
}

.headerContentCopy .subHeading {
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 0.4rem;
}

.headerContentCopy {
  max-width: 50%;
  position: relative;
  z-index: 5;
}

.headerContent p {
  line-height: 1.5;
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.8);
}

.site-header .headerContent h1 {
  font-weight: 700;
  font-size: 2.7rem;
  text-transform: uppercase;
  margin-top: 0px;
  line-height: 1.1;
  color: rgba(0, 0, 0, 0.8);
}

.headerContent h1 span {
  display: inline-block;
}

.headerContent h1 em {
  font-weight: 900;
  font-style: normal;
}

.logo h1 {
  display: inline-block;
  color: rgba(0, 0, 0, 0.9);
  line-height: 1;
  margin-top: 0px;
  margin-bottom: 0px;
  position: relative;
  top: -0.4rem;
  left: 0.4rem;
  text-transform: uppercase;
}

.logo h1 div {
  font-weight: 700;
  font-size: 1.3rem;
}

.logo h1 span {
  display: block;
  font-weight: 300;
  font-size: 1.5rem;
  letter-spacing: 4.5px;
}

.logo svg {
  width: 50px;
  height: 50px;
}

.logo svg path#star {
  fill: url(#Gradient1);
}

.logo svg path#shadow {
  fill: url(#Gradient1);
}

.stop1 {
  stop-color: #af02e5;
  transition: 0.4s;
}
.stop2 {
  stop-color: rgb(96, 32, 245);
  transition: 0.4s;
}

.site-header .logo svg #pixel {
  fill: rgba(255, 255, 255, 0.85);
}

.site-header.about .logo svg #pixel {
  fill: rgba(0, 0, 0, 0.6);
}

.site-header.about .stop1 {
  stop-color: #ffffff;
}

.site-header.about .stop2 {
  stop-color: #ececec;
}

.site-header.blog .stop1 {
  stop-color: #af02e5;
}

.site-header.blog .stop2 {
  stop-color: #8220f5;
}

.mainNav a {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.8);
  display: inline-block;
  padding: 1rem;
  padding-top: 0.35rem;
  padding-bottom: 0.4rem;
  margin-right: 1rem;
  border-radius: 5rem;
  border: 2px solid rgba(0, 0, 0, 0);
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

.mainNav a:hover,
.mainNav a:focus {
  border: 2px solid rgba(0, 0, 0, 0.3);
}

.blogPostWrapper {
  max-width: 600px;
  margin: 0 auto;
}

.blogPostWrapper p {
  font-size: 1.3rem;
  margin-bottom: 2.2rem;
}

.blogpost .mainNav a {
  color: #fff;
  text-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
}

.blogpost .mainNav a:hover,
.blogpost .mainNav a:focus {
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.largeTitleWrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
}

.largeTitleWrapper.about {
  bottom: -25px;
}

.largeTitleWrapper.invoice {
  bottom: -5px;
}

.largeTitleWrapper.blog {
  bottom: 0px;
}

.largeTitleWrapper.blogpost {
  bottom: -30px;
}

.largeTitle {
  position: absolute;
  bottom: 6rem;
  z-index: 1;
  color: #fff;
  font-size: 8rem;
  font-weight: 900;
  text-transform: uppercase;
}

.site-header .headerWrapper {
  padding: 2rem;
  padding-bottom: 6rem;
}

.site-header h1 {
  color: #8220f5;
}

.site-header.blog h1 {
  color: #fff;
}

.site-header.blogpost h1 {
  color: #fff;
  text-shadow: 0px 2px 12px rgba(0, 0, 0, 0.3);
}

.site-header.about h1 {
  color: #fff;
}

.site-header-background {
  will-change: transform;

  position: absolute;
  top: -400px;
  left: -400px;
  right: -400px;
  bottom: 0px;
  z-index: -1;
  overflow: hidden;

  transform: skewY(-4deg);
  transition: 0.4s cubic-bezier(0.25, 0.25, 0, 1.2);
}

.site-header-background .gradient1 {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  /*will-change: opacity;*/

  transition: 0.5s opacity;

  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#c9c9c9+0,f2f2f2+100 */
  background: #b6b6b6; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #b6b6b6 0%,
    #f2f2f2 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #b6b6b6 0%,
    #f2f2f2 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #b6b6b6 0%,
    #f2f2f2 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#b6b6b6",
      endColorstr="#f2f2f2",
      GradientType=1
    ); /* IE6-9 fallback on horizontal gradient */
}

.site-header-background .gradient2 {
  opacity: 0;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  /*will-change: opacity;*/
  transition: 0.5s opacity;

  background: linear-gradient(30deg, #009cf3, #16d6d9);
}

.site-header-background .gradient3 {
  opacity: 0;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  /*will-change: opacity;*/
  transition: 0.5s opacity;

  background: radial-gradient(
    circle farthest-corner at right bottom,
    #ffd08a 0,
    #ffa376 28%,
    #d26578 52%,
    #682a84 79%,
    #241668 100%
  );

  /*alternative */
  /*linear-gradient(30deg,#ffbf02,#ed0082)*/
}

.site-header-background .gradient4 {
  opacity: 0;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  /*will-change: opacity;*/
  transition: 0.5s opacity;

  background: linear-gradient(
    150deg,
    #9719bd 0%,
    #5219bc 19.97%,
    #05d5ff 73.63%,
    #31eb9a 98.63%
  );
}

.textgradient1 {
  background: linear-gradient(-45deg, #b6b6b6 0%, #f2f2f2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.textgradient2 {
  background: linear-gradient(30deg, #009cf3, #16d6d9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.textgradient3 {
  background: radial-gradient(
    circle farthest-corner at right bottom,
    #ffd08a 0,
    #ffa376 28%,
    #d26578 52%,
    #682a84 79%,
    #241668 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.textgradient4 {
  background: linear-gradient(
    150deg,
    #9719bd 0%,
    #5219bc 19.97%,
    #05d5ff 73.63%,
    #31eb9a 98.63%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.textgradient5 {
  background: linear-gradient(30deg, #16d6d9, #96cc29);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.textgradient6 {
  background: linear-gradient(30deg, #ffbf02, #ed0082);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.site-header h1 {
  transition: 0.4s;
}

.site-header-background.blog {
  transform: translateY(-20px) skewY(-2deg);
}

.site-header-background.blogpost {
  transform: translateY(0px) skewY(-4deg);
}

.site-header-background.blog .gradient1,
.site-header-background.blog .gradient3,
.site-header-background.blogpost {
  opacity: 0;
}

.site-header-background.blog .gradient2,
.site-header-background.blogpost {
  opacity: 1;
}

.site-header-background.about .gradient1,
.site-header-background.about .gradient2 {
  opacity: 0;
}

.site-header-background.about .gradient3 {
  opacity: 1;
}

.site-header-background.about {
}

.site-header-background.invoice {
  transform: translateY(-20px) skewY(-4deg);
}

.site-header-background.invoice .gradient1,
.site-header-background.invoice .gradient2 {
  opacity: 0;
}

.site-header-background.invoice .gradient3 {
  opacity: 1;
}
</style>