import { defineStore } from "pinia";

export const useDarkModeStore = defineStore("darkMode", {
  // arrow function recommended for full type inference
  state: () => ({
    darkmode: false,
  }),
  getters: {
    status: (state) => state.darkmode,
  },
  actions: {
    toggle(param: boolean) {
      this.darkmode = param;
      console.log('darkmode',this.darkmode)
    },
  },
});
