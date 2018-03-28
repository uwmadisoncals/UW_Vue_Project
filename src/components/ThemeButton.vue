<template>

    <button>
        <svg viewBox="0 0 24 24" class="google"><path d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" /></svg> 
        Log In with Google 
        <svg viewBox="0 0 24 24"><path id="arrow" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
    </button>       

</template>


<script>
export default {
    name: 'themebutton'
}
</script> 


<style scoped>
/* Buttons */

button {
  position: relative;
  letter-spacing: 0.5px;
  padding: 1rem;
  font-size: 0.9rem;
  padding-top: 0.45rem;
  padding-bottom: 0.5rem;
  background-image: linear-gradient(-55deg, #8220F5 9%, #AF02E5 95%);
  border: 0px solid rgba(255,255,255,0);
  color: rgba(255,255,255,1);
  border-radius: 2rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  box-shadow: 0px 2px 12px rgba(175,2,229,0.6);
  transition: 0.3s;
  box-sizing: border-box;
}

button::before {
  content: ' ';
  display: block;
  border-radius: 2rem;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  border: 2px solid rgba(255,255,255,0);
  z-index:2;
}

button svg {
  position: relative;
  display: inline-block;
  top:50%; 
  height: 0.9rem;
  width: 0.9rem;
  transform: translate(0%, 15%);
  transition: 0.3s;
}


button svg path#arrow {
  fill: rgba(255,255,255,1);
}

button:hover, button:focus {
  transform: translateY(-2px);
  box-shadow: 0px 4px 16px rgba(175,2,229,0.6);
}

button:focus::before, button:hover::before {
  border: 2px solid rgba(255,255,255,0.5);
}

button:hover svg, button:focus svg {
  transform: translate(15%, 15%);
}

button:hover svg path#arrow, button:focus svg path#arrow {
  fill: rgba(255,255,255,1);
}

button:active, button.primary:active, button.secondary:active {
  box-shadow: 0px 1px 6px rgba(175,2,229,0.6);
  transform: translateY(0px);

}

button:active, button:focus {
  outline: none;
} 

svg.google {
  position: relative;
  left: -6px;
}

svg.google path {
  fill: rgba(255,255,255,1);
}
</style>