<template>
  <div class="toggle-btn">
    <Toggle v-model="darkMode" off-label="Light" on-label="Dark" />
  </div>
</template>

<script setup lang="ts">
import Toggle from "@vueform/toggle";
import { useState } from "#app";
import { useDarkModeStore } from "@/stores/darkmode";
import { onMounted, watch } from "@vue/runtime-core";

type Theme = "light" | "dark";

const LOCAL_STORAGE_THEME_KEY = "theme";

const darkMode = useState("theme", () => false);
let darkmode_store = useDarkModeStore();

const setTheme = (newTheme: Theme) => {
  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  darkMode.value = newTheme === "dark";
  darkmode_store.toggle(newTheme === "dark");
};

onMounted(() => {
  const isDarkModePreferred = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const themeFromLocalStorage = localStorage.theme as Theme;

  if (themeFromLocalStorage) {
    setTheme(themeFromLocalStorage);
  } else {
    setTheme(isDarkModePreferred ? "dark" : "light");
  }
});

watch(darkMode, (selected) => {
  setTheme(selected ? "dark" : "light");
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
});
</script>

<style src="@vueform/toggle/themes/default.css"></style>

<style scoped>
.toggle-btn {
  @apply p-2;
}
</style>
