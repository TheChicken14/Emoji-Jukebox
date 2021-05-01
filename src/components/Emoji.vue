<template>
  <h1 class="emoji" :title="name">
    <Transition name="fade" mode="out-in">
      <a :href="url" class="url" target="_blank" :key="url">{{ emoji }}</a>
    </Transition>
  </h1>
</template>

<script>
export default {
  computed: {
    emoji() {
      return this.$store.state.currentSong.emoji;
    },
    url() {
      return this.$store.state.currentSong.url;
    },
    name() {
      return this.$store.state.currentSong.name;
    },
  },
};
</script>

<style scoped>
.url {
  text-decoration: none;
}
.emoji {
  font-size: 6.5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
