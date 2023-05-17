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
  const { locale } = useI18n()
</script>

<style>
</style>