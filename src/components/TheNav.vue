<template>
  <nav id="the-nav" class="flex">
    <ul class="flex">
      <li>Home</li>
      <li>Assets</li>
    </ul>
    <div class="wrap--logo flex">
      <img class="logo" src="../img/logo.svg" alt="logo" />
      <h2>Birdcoin</h2>
    </div>
    <ul class="flex">
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "TheNav"
};
</script>

<style scoped>
#the-nav {
  height: 12%;
  width: 100%;
  justify-content: center;
  padding: 0 20%;
  color: #fff;
  position: absolute;
  top: 0;
}

#the-nav ul {
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}

#the-nav ul li {
  font-size: var(--fs-normal);
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.04em;
}

#the-nav ul li:hover {
  color: var(--c-blue);
}

.wrap--logo {
  height: 100%;
  align-items: center;
}

.wrap--logo h2 {
  font-size: var(--fs-big);
  font-weight: 400;
}

.logo {
  height: 100%;
}
</style>