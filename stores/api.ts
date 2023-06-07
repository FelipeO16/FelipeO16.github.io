import { defineStore } from "pinia";

export const useApiStore = defineStore("api", {
  // arrow function recommended for full type inference
  state: () => ({
    response: "/",
    last_area: "",
    selected: "",
    error: false,
    text: "",
    responses: {
      frontend: {
        pt: "/frontend_pt",
        en: "/frontend_en",
      },
      backend: {
        pt: "/backend_pt",
        en: "/backend_en",
      },
      error: {
        pt: "/error_pt",
        en: "/error_en",
      },
    } as Record<string, Record<string, string>>,
  }),
  getters: {
    status: (state) => state.response,
    selectedStack: (state) => state.selected,
    isError: (state) => state.error,
    getText: (state) => state.text,
  },
  actions: {
    setText(text: string) {
      this.text = text;
    },
    async getResponse(param: string, lang: string) {
      if (this.responses[param] && this.responses[param][lang]) {
        this.error = false;
        this.response = this.responses[param][lang];
        this.last_area = param;
      } else {
        // Item não existe, defina um valor padrão ou trate o caso
        this.error = true;
        this.response = this.responses.error[lang];
        this.last_area = "error";
      }
      return new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(this.response);
        }, 3000);
      });
    },
    change(lang: string) {
      if (this.last_area && this.responses[this.last_area]) {
        this.error = false;
        this.response = this.responses[this.last_area][lang];
      } else {
        this.error = true;
        this.response = this.responses.error[lang];
      }
    },
  },
});
