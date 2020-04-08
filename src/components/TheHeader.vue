<template>
  <header id="the-header" class="flex flex--column flex--cc">
    <TheNav />
    <TheMainTitle />
    <div class="wrap--buttons flex">
      <AppButton class="btn--full" cta="Download" />
      <AppButton class="btn--void" cta="Start Tutorial" />
    </div>
    <div class="bg bg--grid"></div>
    <div class="bg bg--circles"></div>
  </header>
</template>

<script>
import TheNav from "./TheNav.vue";
import TheMainTitle from "./TheMainTitle.vue";
import AppButton from "./AppButton.vue";

export default {
  name: "TheHeader",
  components: {
    TheNav,
    TheMainTitle,
    AppButton
  }
};
</script>

<style scoped>
#the-header {
  width: 100%;
  height: 100vmin;
  background: var(--c-bg);
  position: relative;
}

.wrap--buttons {
  justify-content: space-between;
  width: 24%;
}

.btn--full {
  background: var(--c-blue);
  border: 0;
  color: #fff;
}

.btn--full:hover {
  background: var(--c-red);
}

.btn--void {
  color: var(--c-blue);
  border: 3px solid var(--c-blue);
  background: transparent;
}

.btn--void:hover {
  color: var(--c-red);
  border: 3px solid var(--c-red);
}

.bg {
  position: absolute;
  height: 10rem;
  width: 10rem;
  z-index: 1;
}

.bg--grid {
  background-image: url(../img/grid.svg);
  right: 5%;
  top: 20%;
}

.bg--circles {
  background-image: url(../img/circles.svg);
  left: -2%;
  bottom: -5%;
  transform: scale(2.5);
  opacity: 0.5;
}
</style>