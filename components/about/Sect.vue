<template>
    <div class="about">
      <div class="image"><img src="/assets/undraw_code_review_re_woeb.svg"></div>
      <div class="aboutme">
        <p v-for="item, index in $t('aboutme').split('  ')" :key="index">{{ item }}</p>
      </div>
    </div>
  </template>
  
<style scoped>
.about {
    margin-top: 100px;
    height: calc(100vh - 100px);
    background: url('bg-sect.svg');
    background-size: cover;
    @apply w-full dark:bg-background-500 bg-white flex justify-center 2xl:items-end gap-5;
}

.image {
    @apply w-3/6 hidden lg:flex justify-center;
}

.aboutme {
    @apply text-sm px-10 py-2.5 self-center text-white text-left w-full lg:w-3/6 flex flex-col gap-4 h-full items-center justify-center ;
}
</style>