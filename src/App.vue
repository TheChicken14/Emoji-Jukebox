<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition mode="out-in" appear name="rootfade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("shuffle");

    const bg = [1, 2, 3, 4, 5][Math.floor(Math.random() * 5)];

    document.getElementsByTagName("html")[0].classList.add(`bg${bg}`);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.rootfade-enter-active,
.rootfade-leave-active {
  transition: opacity 0.3s ease;
}
.rootfade-enter,
.rootfade-leave-to {
  opacity: 0;
}

html {
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: #fa8bff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.bg1 {
  background-color: #fa8bff;
  background-image: linear-gradient(
    45deg,
    #fa8bff 0%,
    #2bd2ff 52%,
    #2bff88 90%
  );
}

.bg2 {
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
}

.bg3 {
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
}

.bg4 {
  background-color: #ff3cac;
  background-image: linear-gradient(
    225deg,
    #ff3cac 0%,
    #784ba0 50%,
    #2b86c5 100%
  );
}

.bg5 {
  background-color: #ffffff;
  background-image: linear-gradient(
    180deg,
    #ffffff 0%,
    #6284ff 50%,
    #ff0000 100%
  );
}
</style>
