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
  },
  mutations: {
    previous(state) {
      const index = songs.findIndex(state.currentSong);

      if (songs[index - 1]) {
        state.currentSong = songs[index - 1];
      } else {
        state.currentSong = songs[songs.length - 1];
      }
    },
    shuffle(state) {
      state.currentSong = songs[Math.floor(Math.random() * songs.length)];
    },
    next(state) {
      const index = songs.findIndex(state.currentSong);

      if (songs[index + 1]) {
        state.currentSong = songs[index + 1];
      } else {
        state.currentSong = songs[0];
      }
    },
  },
  actions: {},
  modules: {},
});
