<template>
  <div v-if="visible" class="container">
    <iframe
      :src="embedURL"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  computed: {
    embedURL() {
      return this.$store.getters.embedURL;
    },
    visible() {
      return this.$store.state.playerVisible;
    },
  },
};
</script>

<style scoped>
iframe {
  width: 100vh;
  height: 100vh;
  background-color: rgb(000, 000, 000, 0.15);

  max-width: 560px;
  max-height: 315px;
}
</style>
