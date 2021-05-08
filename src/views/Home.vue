<template>
  <div class="home">
    <Emoji />
    <Controls />
    <YouTubePlayer />
  </div>
</template>

<script>
// @ is an alias to /src
import Emoji from "../components/Emoji.vue";
import Controls from "../components/Controls.vue";
import YouTubePlayer from "../components/YouTubePlayer.vue";

export default {
  name: "Home",
  components: {
    Emoji,
    Controls,
    YouTubePlayer,
  },
};
</script>
