<template>
  <div class="requests">
    <button
      class="btn-get"
      :class="
        api.selected == 'frontend' ? 'bg-slate-950' : 'bg-dark-background-900'
      "
      @click="api.selected = 'frontend'"
    >
      <div class="get">GET</div>
      <div class="text">Front-End Stacks</div>
    </button>
    <button
      class="btn-get"
      :class="
        api.selected == 'backend' ? 'bg-slate-950' : 'bg-dark-background-900'
      "
      @click="api.selected = 'backend'"
    >
      <div class="get">GET</div>
      <div class="text">Back-End Stacks</div>
    </button>
    <a href="#about" class="btn-get bg-dark-background-900">
      <div class="get">GET</div>
      <div class="text">About me</div>
    </a>
    <a href="#contact" class="btn-post bg-dark-background-900">
      <div class="post">POST</div>
      <div class="text">Send Message</div>
    </a>
  </div>
</template>

<script setup>
import { useApiStore } from "@/stores/api";
const { locale } = useI18n();
const api = useApiStore();
</script>

<style scoped>
.requests {
  @apply flex flex-col items-center gap-8 p-4 w-full;
}

.btn-get {
  @apply w-11/12 h-20 flex rounded-xl border-l-2 border-dark-primary-500 px-2 items-center gap-8 pl-4;
}
.btn-post {
  @apply w-11/12 h-20 flex rounded-xl border-l-2 border-sky-500 px-2 items-center gap-8 pl-4;
}

.get {
  @apply text-2xl text-dark-primary-500 font-bold w-1/6;
}
.post {
  @apply text-2xl text-sky-500 font-bold  w-1/6;
}

.text {
  @apply text-dark-useful-500 text-lg;
}
</style>
