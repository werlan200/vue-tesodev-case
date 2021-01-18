<template>
  <form @submit.prevent="handleSubmit($event, inputValue)" class="search-input">
    <input
      autofocus
      type="text"
      :placeholder="!placeholderState ? 'Search...' : placeholderState"
      v-model="inputValue"
    />
  </form>
</template>

<script>
export default {
  props: {
    propFunction: { type: Function, required: false },
    placeholderState: { type: String, required: false },
  },
  data() {
    return {
      inputValue: "",
    };
  },
  watch: {
    // search sayfasında arama
    inputValue: function (val) {
      if (this.$route.path === "/search") {
        this.$store.dispatch("changeInputData", val);
      }
    },
  },
  methods: {
    handleSubmit(e, payload) {
      if (this.propFunction) {
        this.propFunction(payload);
      } else {
        console.log(e); //bu olmadiginda search sayfasinda enter yapinca hata veriyor
      }
    },
  },
};
</script>

<style scoped>
input {
  background-color: #fff;
  border: none;
  padding: 0.8rem 1.6rem;
  outline: none;
  border-radius: 1rem;
  box-shadow: 3px 0 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s linear;
  font-size: 1.1rem;
}
input:hover {
  transform: scale(1.1);
  box-shadow: 3px 0 10px rgba(0, 0, 0, 1);
}
</style>