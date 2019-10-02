<template>
  <div id="HomeContainer" class="pageContainer">
   <!--  <div class="pageContentAbsolut">
      Hola soy kevin!
       <b-button @click="clickMe">boton</b-button>
    </div>-->
 <img id="logo" src="img/fondo2.jpg" width="1500px" height="1000px" />
  </div>
</template>

<script>
export default {
  components: {},
  // data: function() {},
  methods: {
    toggleNav: function () {
      this.$emit('toggleNav')
    }
  },
  created () {
    this.$store.commit('SET_LAYOUT', 'principal-layout')
  }
}
</script>
<style scoped>
@import "Home.min.css";
</style>
