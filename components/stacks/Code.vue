<template>
  <div class="content-doc">
    <pre><ContentDoc :path="api.status" class="prose text-left" /></pre>
    <h1><ContentDoc path="/backend_pt" class="prose text-left" /></h1>
    <h1><ContentDoc path="/backend_en" class="prose text-left" /></h1>
    <h1><ContentDoc path="/frontend_pt" class="prose text-left" /></h1>
    <h1><ContentDoc path="/frontend_en" class="prose text-left" /></h1>
    <h1><ContentDoc path="/error_pt" class="prose text-left" /></h1>
    <h1><ContentDoc path="/error_en" class="prose text-left" /></h1>
  </div>
</template>

<script setup>
import { useApiStore } from "@/stores/api";
const api = useApiStore();
</script>

<style scoped>
.content-doc {
  @apply w-full h-full;
}

::-webkit-scrollbar {
  @apply h-2;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 30px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply bg-dark-primary-500 rounded-lg;
}

pre {
  line-height: normal;
  word-break: break-all;
  overflow-x: auto;
  @apply h-full w-full whitespace-nowrap leading-tight flex py-4 px-2;
}

h1 {
  @apply hidden;
}
</style>
