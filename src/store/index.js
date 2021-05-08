import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import songs from "../songs";

export default new Vuex.Store({
  state: {
    currentSong: {
      url: "",
      name: "",
      emoji: "",
    },
    playerVisible: false,
  },
  mutations: {
    previous(state) {
      const index = songs.indexOf(state.currentSong);
      state.playerVisible = false;

      if (songs[index - 1]) {
        state.currentSong = songs[index - 1];
      } else {
        state.currentSong = songs[songs.length - 1];
      }
    },
    playpause(state) {
      state.playerVisible = !state.playerVisible;
    },
    shuffle(state) {
      state.currentSong = songs[Math.floor(Math.random() * songs.length)];
      state.playerVisible = false;
    },
    next(state) {
      const index = songs.indexOf(state.currentSong);
      state.playerVisible = false;

      if (songs[index + 1]) {
        state.currentSong = songs[index + 1];
      } else {
        state.currentSong = songs[0];
      }
    },
  },
  getters: {
    embedURL: (state) => {
      const vID = state.currentSong.url
        .split("/")
        .pop()
        .split("?")[0];

      return `https://www.youtube.com/embed/${vID}`;
    },
    // https://www.youtube.com/embed/do9My8KY4bE
  },
  actions: {},
  modules: {},
});
