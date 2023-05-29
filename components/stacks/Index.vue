<template>
  <div class="container">
    <div class="stacks">
      <div class="header">a</div>
      <StacksApiForm />
      <div class="content">
        <div class="left-side">
          <StacksButtons />
        </div>
        <div class="right-side">
          <StacksCode />
        </div>
      </div>
      <!-- <button @click="api.getResponse('frontend', 'pt')">pt</button> -->
    </div>
  </div>
</template>

<style scoped>
/* .stacks {
  @apply w-full h-full flex flex-col justify-center gap-8 items-center;
} */

.container {
  @apply flex flex-col items-center justify-end;
}

.stacks {
  height: calc(100% - 80px);
  @apply flex flex-col items-center w-10/12 py-8 px-4;
}

.header {
  background-size: cover;
  @apply text-2xl font-bold w-full text-dark-secondary-500 text-center text-transparent;
}

.content {
  @apply w-full h-full flex justify-center items-center bg-dark-background-500 dark:bg-neutral-900 rounded-b-lg;
}

.left-side {
  @apply w-2/5 h-full border-r border-dark-primary-500;
}

.right-side {
  @apply w-3/5 h-full;
}
</style>

<script setup>
import { useApiStore } from "@/stores/api";
const { locale } = useI18n();
let api = ref(useApiStore());
</script>
