<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="pt">pt</option>
      </select>
    </form>
  </div>
</template>

<script setup>
const { locale } = useI18n();
</script>

<style scoped>
select {
  @apply bg-transparent text-light-secondary-500 dark:text-dark-secondary-500;
  transition: all 0.3s ease-in-out;
}

option {
  @apply text-light-secondary-500 dark:text-dark-secondary-500 p-1 bg-light-background-500 dark:bg-dark-background-500;
  transition: all 0.3s ease-in-out;
}
</style>
