<template>
  <div>
    <span class="control" @click="prev">⏪</span>
    <span class="space" />

    <span class="control" @click="playpause">⏯</span>
    <span class="space" />

    <span class="control" @click="shuffle">🔀</span>
    <span class="space" />

    <span class="control" @click="next">⏩</span>
  </div>
</template>

<script>
export default {
  methods: {
    prev() {
      this.$store.commit("previous");
    },
    playpause() {
      this.$store.commit("playpause");
    },
    shuffle() {
      this.$store.commit("shuffle");
    },
    next() {
      this.$store.commit("next");
    },
  },
};
</script>

<style scoped>
.control {
  font-size: 4rem;
  cursor: pointer;
}

.space {
  margin: 0.5rem;
}
</style>
