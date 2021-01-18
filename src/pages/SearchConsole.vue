<template>
  <section>
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="header">
      <h3>TESODEV Search Console</h3>
      <search-input :placeholderState="currState"></search-input>
    </div>
    <search-results></search-results>
  </section>
</template>

<script>
import SearchResults from "../components/SearchResults.vue";
import SearchInput from "../components/SearchInput.vue";

export default {
  components: { SearchInput, SearchResults },
  computed: {
    currState() {
      return this.$store.getters.inputData;
    },
  },
};
</script>

<style scoped>
.logo {
  text-align: center;
}
.header {
  text-align: center;
}
@media screen and (min-width: 600px) {
  .logo {
    text-align: start;
    width: 70%;
    margin: 0 auto;
  }
  img {
    width: 70px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
  }
}
</style>