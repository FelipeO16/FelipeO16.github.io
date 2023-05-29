<template>
  <div class="welcome">
    <div class="welcome-image">
      <img :src="darkmode.status ? 'profile-dark.svg' : 'profile-light.svg'" />
    </div>
    <div class="hello">
      <span>{{ $t("hello") }}</span>
    </div>
    <div class="welcome-text">
      <span>{{ $t("welcome") }}</span>
    </div>
    <div class="button">
      <UtilsButton :text="$t('menu.about')" link="#about" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDarkModeStore } from "@/stores/darkmode";
const darkmode = useDarkModeStore();
</script>

<style scoped>
.welcome {
  @apply w-full h-5/6 flex flex-col gap-8 items-center justify-center;
}

.welcome-image {
  @apply w-1/3 lg:w-1/5 flex justify-center items-center;
}

.hello {
  @apply text-light-primary-500 dark:text-dark-primary-500 text-3xl lg:text-4xl;
  transition: all 0.3s ease-in-out;
}
.welcome-text {
  letter-spacing: 0.1em;
  color: #b5b5b5;
  @apply text-light-useful-500 text-sm lg:text-xl dark:text-dark-secondary-500 text-center lg:w-1/3 w-2/3;
  transition: all 0.3s ease-in-out;
}

.button {
  @apply h-14 w-32 flex justify-center items-center;
}
</style>
