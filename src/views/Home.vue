<template>
  <div class="home">
    <Emoji />
    <Controls />
  </div>
</template>

<script>
// @ is an alias to /src
import Emoji from "../components/Emoji.vue";
import Controls from "../components/Controls.vue";

export default {
  name: "Home",
  components: {
    Emoji,
    Controls,
  },
};
</script>
