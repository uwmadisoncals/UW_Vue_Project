<template>
  <div id="app">
    
        <mainheader message="tada!" :theme="headerTheme" :bgimg="headerbgimg" :prevbgimg="prevheaderbgimg" />

        <transition name="slide" mode="out-in">
          <router-view @changeSiteTheme="changeSiteTheme"></router-view>
        </transition>
  
  </div>
</template>



<script>
import mainheader from './components/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      headerTheme: 'default',
      headerbgimg: '',
      prevheaderbgimg: ''
    }
  },
  components: {
    'mainheader': mainheader
  },
  methods: {
    changeSiteTheme: function (theme, img, previmg) {
      this.headerTheme = theme;
      this.headerbgimg = img;
      this.prevheaderbgimg = previmg;
    }
  }
}
</script>



<style>
/* Define the "system" font family */
@font-face {
  font-family: system;
  font-style: normal;
  font-weight: 300;
  src: local("-apple-system"), local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}

#root {
  overflow-x: hidden; /* allows position absolute items to hang outside of containers without adding horizontal scroll */
}

body {
  margin: 0;
  padding: 0;
  background: #fff;
  min-height: 100vh;
  text-rendering: optimizeLegibility;
  font-family: "proxima-nova", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

h1 {
  font-weight: 900;
  color: #8220f5;
}

h2 {
  color: #f59220;
}

a {
  color: #1d99ff;
}

em {
  font-weight: 300;
}


/* scaffolding */

.fullWidth {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.site-header {
  position: relative;
  box-sizing: border-box;
  margin-bottom: 2rem;
}

.site-header header {
  position: relative;
  z-index:4;
}

.maxWidth {
  max-width: 1200px;
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 0 auto;
}

.rightAlign {
  text-align: right;
}

.centerAlign {
  text-align: center;
}

.row {
  display: flex;
}

.row .width-50 {
  flex-basis: 50%;
}

.row .width-33 {
  flex-basis: 33%;
}

.row .width-66 {
  flex-basis: 66%;
}

.row .width-25 {
  flex-basis: 25%;
}

.row .width-75 {
  flex-basis: 75%;
}

.row div:first-child {
  flex-grow: 1;
}


/* animations */
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




/* Middle Content */

.midContent {
    position: relative;
    margin-top: 4rem;
    padding-bottom: 4rem;
    
    min-height: 60vh;
}



.midContent h1 {
  font-weight: 700;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  margin-top: 0px;
  color: rgba(0,0,0,0.8);
}

.midContent p {
  line-height: 1.6;
}

.midContent h2.subHeading {
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-top: 0px;
  margin-bottom: 0px;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#f59220+9,e5c400+97 */
background: #f59220; /* Old browsers */
background: -moz-linear-gradient(top, #f59220 9%, #e5c400 97%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #f59220 9%,#e5c400 97%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #f59220 9%,#e5c400 97%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f59220', endColorstr='#e5c400',GradientType=0 ); /* IE6-9 */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}



/* Footer Styles */

.siteFooter {
  border-top: 1px solid rgba(0,0,0,0.1);
}

.siteFooter .footerInner {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.siteFooter h2 {
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: 700;
  font-size: 0.8rem;
  color: rgba(0,0,0,0.3);
}

.siteFooter h3 {
  color: #af02e5;
  font-size: 0.7rem;
  font-weight: 300;
}

.siteFooter p {
  font-size: 0.7rem;
  color: rgba(0,0,0,0.6);
}

.siteFooter ul {
  margin-left: 0px;
  padding-left: 0px;
}

.siteFooter ul li {
  list-style: none;
  margin-left: 0px;
  padding-left: 0px;
  font-size: 0.7rem;
  color: rgba(0,0,0,0.6);
}

.siteFooter ul li a {
  color: #f59220;
}

.switch-wrapper {
  position: relative;
}

.switch-wrapper > div {
  position: absolute;
}




</style>
