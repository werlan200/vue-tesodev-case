<template>
  <div>
    <button @mouseover="toggleActive">Order By</button>
    <div class="button-groups" v-show="active" @mouseleave="toggleActive">
      <button class="order-btn" @click="order('name')">Filter by Name</button>
      <button class="order-btn" @click="order('date')">Filter by Date</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleActive() {
      this.active = !this.active;
    },
    order(payload) {
      this.$store.dispatch("orderData", payload);
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  border-radius: 1rem;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  text-transform: capitalize;
  outline: none;
  background-color: #fff;
  transition: all 0.5s ease-out;
}

button:hover {
  color: #fff;
  background-color: crimson;
}
.button-groups {
  position: absolute;
  display: flex;
  flex-direction: column;
}
.order-btn {
  cursor: pointer;
}
</style>