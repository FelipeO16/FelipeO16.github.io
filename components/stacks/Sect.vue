<template>
    <div class="stacks">
      <div class="image"><img src="gdpr-not-css.svg"></div>
      <div class="stack">
        <StacksHtml />
        <StacksCss />
        <StacksJavascript/>
        <StacksVue />
        <StacksNode />
        <StacksLua />
        <StacksAdonis />
        <StacksMysql />
      </div>

    </div>
  </template>
  
<style scoped>
.stacks {
    margin-top: 100px;
    height: calc(100vh - 100px);
    background: url('bg-sect.svg');
    background-size: cover;
    @apply w-full dark:bg-background-500 bg-white flex flex-col justify-center items-center gap-5;
}

.image {
    @apply w-3/6 h-3/6 hidden lg:flex justify-center;
}

.stack {
    @apply h-3/6 w-full flex flex-col gap-4 lg:flex-row justify-around items-center ;
}
</style>