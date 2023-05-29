<template>
  <a :href="link">{{ text }}</a>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
a {
  @apply p-4 text-white font-semibold bg-light-primary-500 dark:bg-dark-primary-500 rounded-lg uppercase tracking-widest w-full h-full flex justify-center items-center;
  transition: all 0.3s ease-in-out;
}
</style>
