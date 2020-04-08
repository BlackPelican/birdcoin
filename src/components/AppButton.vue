<template>
  <button class="app-button">{{cta}}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    cta: String
  }
};
</script>

<style scoped>
.app-button {
  font-size: 1rem;
  height: 2.6em;
  width: 9em;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: all 200ms ease-in-out;
}

.app-button:focus {
  outline: 0;
}

.app-button:active {
  transform: scale(0.95);
}
</style>