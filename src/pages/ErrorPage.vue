<template>
  <section>
    <header>
      <h1>Page not Found</h1>
    </header>
    <h2>Return to Main Page</h2>
    <router-link to="/" class="btn">Main Page</router-link>
  </section>
</template>
<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.btn {
  text-decoration: none;
  max-width: 200px;
  max-height: 120px;
  background-color: crimson;
  padding: 1rem 2rem;
  margin: 0;
  font-weight: bold;
  color: #fff;
  border-radius: 1rem;
  transition: all 0.3s ease-out;
}
.btn:hover {
  background-color: #fff;
  color: crimson;
}
</style>