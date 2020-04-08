<template>
  <div id="app">
    <TheHeader />
    <TheSteps />
  </div>
</template>

<script>
import TheSteps from "./components/TheSteps.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheSteps,
    TheHeader
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --c-bg: linear-gradient(to right, #202736, #121723);
  --c-red: #ff786b;
  --c-yellow: #faaf6a;
  --c-blue: #7a86dd;
  --fs-normal: 1rem;
  --fs-bigger: 2.6rem;
  --fs-big: 1.6rem;
}

html,
body {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Sen";
}

ul {
  list-style-type: none;
}

li {
  text-decoration: none;
}

.flex {
  display: flex;
}

.flex--column {
  flex-direction: column;
}

.flex--cc {
  justify-content: center;
  align-items: center;
}
</style>
