<template>
  <section id="the-steps" class="flex flex--column">
    <div class="wrap--steps flex">
      <AppStep
        color="red"
        number="1"
        title="Asset Token Creation"
        text="Easily create, customize andtransfer your own asset tokens"
      />
      <AppStep
        color="yellow"
        number="2"
        title="Ownership Token Controls"
        text="Message, pay dividends and poll your token holders"
      />
      <AppStep
        color="blue"
        number="3"
        title="Assign IPFS Metadata"
        text="Attach anything to your asset token"
      />
    </div>
  </section>
</template>

<script>
import AppStep from "./AppStep.vue";

export default {
  name: "TheSteps",
  components: {
    AppStep
  }
};
</script>

<style scoped>
#the-steps {
  width: 100%;
  height: 60vh;
  background: var(--c-bg);
  position: relative;
  align-items: center;
  padding-top: 0%;
}

.wrap--steps {
  width: 80%;
  height: 30%;
  justify-content: space-between;
}
</style>