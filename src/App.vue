<template>
  <router-view></router-view>
</template>
<style >
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
  width: 100vw;
  background-color: grey;
}
@media screen and (min-width: 600px) {
  body {
    height: 100vh;
  }
}
img {
  transition: all 0.5s linear;
}
img:hover {
  transform: scale(1.1);
}
</style>