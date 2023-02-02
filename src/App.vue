<template>
  <div id="app">
    <!-- <img width="25%" src="./assets/logo.png">
    -->
    <!-- <icon /> -->
    <!-- <settings /> -->
    <timer />
    <!-- <el-button icon="el-icon-s-tools" v-on:click="showDialog()" circle></el-button> -->
  </div>
</template>

<script>
import settings from "./components/settings";

import timer from "./components/timer";
import icon from "./assets/clip.vue";
export default {
  name: "App",
  components: {
    settings,
    timer,
    icon,
  },
  methods: {
    showDialog() {
      console.log("shown");
      this.$store.dispatch("showMenu");
    },
  },
};
</script>

<style>
@import url("https://fonts.cdnfonts.com/css/montserrat.css");
@import url("https://fonts.cdnfonts.com/css/montserrat.css");

.slides {
  font-family: "Montserrat Light";
}

.slides h1,
.slides h2,
.slides h3,
.slides h4,
.slides h5,
.slides h6 {
  font-family: "Montserrat", sans-serif;
}

#app {
  background: #002147;
  /* background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%); */
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e26c7e;
  margin: 0px;
  padding: 20px;
  height: 100%;
}
body,
html {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}
</style>
