import { createStore } from "vuex";
import data from "./modules/data";
const store = createStore({
  modules: {
    data,
  },
  state() {
    return {
      inputSearch: "",
      currentPage: 0,
      filteredList: [],
      loading: false,
    };
  },
  getters: {
    inputData(state) {
      return state.inputSearch;
    },
    showFilteredList(state) {
      return state.filteredList;
    },
    showCurrentPage(state) {
      return state.currentPage;
    },
    isLoading(state) {
      return state.loading;
    },
  },
  mutations: {
    changeInputData(state, payload) {
      state.inputSearch = payload;
    },

    filterData(state) {
      const newArr = state.data.tours.filter((item) => {
        return item.title.toLowerCase().includes(state.inputSearch);
      });
      state.filteredList = newArr;
      state.currentPage = 0;
    },

    paginate(state) {
      const itemsPerPage = 3;
      const numOfPages = Math.ceil(state.filteredList.length / itemsPerPage);

      let newArr = Array.from({ length: numOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        return state.filteredList.slice(start, start + itemsPerPage);
      });
      state.filteredList = newArr;
    },

    setPage(state, payload) {
      state.currentPage = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },

    orderData(state, payload) {
      let newArr = [];
      for (let i = 0; i < state.filteredList.length; i++) {
        newArr = [...newArr, ...state.filteredList[i]];
      }
      if (payload === "name") {
        newArr.sort((a, b) => {
          var nameA = a.title
            .toLowerCase()
            .split(" ")
            .join("");
          var nameB = b.title
            .toLowerCase()
            .split(" ")
            .join("");
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else if (payload === "date") {
        newArr.sort((a, b) => {
          return b.date - a.date;
        });
      }

      state.filteredList = newArr;
    },
  },
  actions: {
    changeInputData(context, payload) {
      context.commit("changeInputData", payload);
      context.dispatch("setLoading", true);
      context.dispatch("filterData");
      context.dispatch("paginate");
    },
    paginate(context) {
      context.commit("paginate");
      context.dispatch("setLoading", false);
    },
    filterData(context) {
      context.commit("filterData");
    },
    setPage(context, payload) {
      context.commit("setPage", payload);
    },
    orderData(context, payload) {
      context.dispatch("setLoading", true);
      context.commit("orderData", payload);
      context.dispatch("paginate");
      context.dispatch("setLoading", false);
    },
    setLoading(context, payload) {
      context.commit("setLoading", payload);
    },
  },
});
export default store;
