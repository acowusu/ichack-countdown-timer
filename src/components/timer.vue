<template>
  <div class="hello">
    <h2>{{ time }}</h2>
    <!-- {{ getSeconds }} -->
    <!-- <code>{{ getTask.name }}</code> -->
    <div></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HelloWorld",

  created() {
    this.$store.dispatch("reset");
  },
  computed: {
    ...mapGetters(["getSeconds", "getTask"]),
    time() {
      let totalSeconds = this.getSeconds;
      let hours = Math.floor(this.getSeconds / 3600);
      totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = totalSeconds % 60;
      return `${hours}:${minutes}:${seconds}`;
    },

    // getSeconds() {
    //   return this.$store.getters.getSeconds;
    // },
    // getName() {
    //   return this.$store.getters.getTask.name;
    // }
  },
  methods: {},
};
</script>

<style scoped>
.hello {
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-size: 20em;
  /* margin: 20px; */
}
code {
  font-size: 5em;
}
button {
  background: #ffffff;
  border: 0;
  padding: 1em;
  border-radius: 50%;
}
</style>
