<template>
  <article>
    <header>
      <h3>Search Results</h3>
      <order-button></order-button>
    </header>
    <loading-spinner v-if="isLoading"></loading-spinner>
    <no-result-warning v-else-if="resultWarning"></no-result-warning>
    <div v-else>
      <ul>
        <search-items
          v-for="single in filteredList[currentPage]"
          :key="single.id"
          :id="single.id"
          :description="single.description"
          :title="single.title"
          :date="single.date"
        ></search-items>
      </ul>
      <pagination :list="filteredList"></pagination>
    </div>
  </article>
</template>
<script>
import SearchItems from "./SearchItems.vue";
import LoadingSpinner from "../UI/LoadingSpinner.vue";
import OrderButton from "../UI/OrderButton.vue";
import Pagination from "../UI/Pagination.vue";
import NoResultWarning from "../UI/NoResultWarning.vue";

export default {
  components: {
    SearchItems,
    LoadingSpinner,
    OrderButton,
    Pagination,
    NoResultWarning,
  },

  computed: {
    filteredList() {
      return this.$store.getters.showFilteredList;
    },
    currentPage() {
      return this.$store.getters.showCurrentPage;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
    resultWarning() {
      return this.filteredList.length === 0;
    },
  },
};
</script>

 <style scoped>
article {
  margin: 2rem 0;
}

header {
  display: flex;
  justify-content: space-around;
}
ul {
  margin: 2rem;
  list-style: none;
  padding: 0;
}

@media screen and (min-width: 600px) {
  header {
    width: 70%;
    margin: 0 auto;
    justify-content: space-between;
  }
  h3 {
    margin-left: 4rem;
  }
}
</style>