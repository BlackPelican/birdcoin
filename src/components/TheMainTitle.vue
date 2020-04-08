<template>
  <div id="the-main-title" class="flex flex--column flex--cc">
    <h1>
      Birdcoin
      <br />is a peer-to-peer blockchain.
    </h1>
    <p>Handling the efficient creation and transfer of assets from one party to another.</p>
  </div>
</template>

<script>
export default {
  name: "TheMainTitle"
};
</script>

<style scoped>
#the-main-title {
  height: 50%;
  width: 50%;
}

h1 {
  font-size: var(--fs-bigger);
  margin-bottom: 0.4em;
  text-align: center;
  color: #fff;
  font-weight: 400;
}

p {
  font-size: 1.2rem;
  text-align: center;
  color: #aaa;
}

h1,
p {
  letter-spacing: 0.04em;
  line-height: 1.6;
}
</style>