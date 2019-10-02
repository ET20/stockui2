<template>
  <div id="app">
    <div id="barra" class="columns">
      <div id="caja1" class="caja0">
        <!--<img id="lineas" src="img/lineas.png">-->
        <b-icon icon="menu" size="is-medium"></b-icon>
      </div>
      

      <div id="caja0" class="caja0">
        <section>
          <b-button @click="clickMe">Clicask Me</b-button>
        </section>
      </div>
    </div>
    <!--Contenedor principal donde cargan las páginas de la app-->

    <main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700");
@import url("http://cdn.materialdesignicons.com/3.7.95/css/materialdesignicons.min.css");
@import "../styles/ui.css";
</style>

<script>
export default {
  methods: {
    clickMe() {
      this.$buefy.notification.open("Clicked!!");
      this.$router.push("home");
    }
  }
};
</script>
