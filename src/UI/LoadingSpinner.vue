<template>
  <div class="loading"></div>
</template>

<style scoped>
.loading {
  margin: 50px 50px;
  width: 5rem;
  height: 5rem;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top-color: var(--clr-primary-4);
  border-radius: 50%;
  animation: spin 1s infinite linear;
}
@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

