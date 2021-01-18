<template>
  <section>
    <img src="../assets/logo.png" alt="logo" />
    <h2>TESODEV Search Console</h2>
    <search-input :propFunction="changeInput"></search-input>
  </section>
</template>
<script>
import SearchInput from "../components/SearchInput.vue";
export default {
  components: {
    SearchInput,
  },
  methods: {
    changeInput(payload) {
      this.$store.dispatch("changeInputData", payload);
      this.$router.push("/search");
    },
  },
};
</script>


 <style scoped>
section {
  width: 100%;
  height: auto;
  text-align: center;
  padding: 5rem;
}
img {
  margin: 2rem;
}
</style>