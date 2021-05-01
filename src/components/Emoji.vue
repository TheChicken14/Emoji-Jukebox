<template>
  <h1 class="emoji" :title="name">
    <a :href="url" class="url" target="_blank">{{ emoji }}</a>
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
</style>
