<template>
  <div class="pagination" v-if="list.length > 1">
    <button @click="setPage" v-for="i in list.length" :key="i" :value="i">
      {{ i }}
    </button>
  </div>
</template>
<script>
export default {
  props: ["list"],
  methods: {
    setPage(e) {
      this.$store.dispatch("setPage", e.target.value - 1);
    },
  },
};
</script>
<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
}

button {
  border: none;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  margin-left: 0.5rem;
  font-weight: 600;
  text-transform: capitalize;
  outline: none;
  background-color: #fff;
  transition: all 0.5s ease-out;
  cursor: pointer;
}
button:hover {
  color: #fff;
  background-color: crimson;
}
@media screen and (min-width: 600px) {
  .pagination {
    width: 70%;
    margin: 0 auto;
    justify-content: flex-end;
  }
}
</style>