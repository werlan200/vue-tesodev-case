<template>
  <li>
    <div>
      <article>
        <h4>{{ title }}</h4>
        <p>
          {{ desc }}
        </p>
      </article>
      <h4>{{ properDate }}</h4>
    </div>
  </li>
</template>
<script>
export default {
  props: ["id", "title", "description", "date"],
  computed: {
    desc() {
      return this.description.length > 100
        ? this.description.substr(0, 100)
        : this.description;
    },
    properDate() {
      return (
        this.date.getDate() +
        "/" +
        (this.date.getMonth() + 1) +
        "/" +
        this.date.getFullYear()
      );
    },
  },
};
</script>
<style scoped>
li {
  margin: 1rem;
}
@media screen and (min-width: 600px) {
  li {
    width: 50%;
    margin: 1rem auto;
  }
}
div {
  border-radius: 1rem;
  padding: 0 1rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
article {
  margin-right: 2rem;
}
p {
  font-size: 0.9rem;
}
</style>