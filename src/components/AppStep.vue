<template>
  <div class="app-step flex">
    <div class="step_box flex flex--cc" :class="color">{{number}}</div>
    <div class="step_text">
      <h2>{{title}}</h2>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppStep",
  props: {
    number: String,
    title: String,
    color: String,
    text: String
  }
};
</script>

<style scoped>
.app-step {
  color: #fff;
  width: 30%;
  height: 100%;
  position: relative;
  z-index: 1;
}

.step_box {
  height: 10vmin;
  width: 10vmin;
  margin-right: 1rem;
  font-size: 2.6rem;
}

.step_text {
  max-width: 60%;
}

h2 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

p {
  color: #aaa;
}

h2,
p {
  line-height: 1.4;
  letter-spacing: 0.02em;
}

.red {
  background: var(--c-red);
}

.yellow {
  background: var(--c-yellow);
}

.blue {
  background: var(--c-blue);
}
</style>