<template>
    <div class="stacks">
      <div class="image"><img src="/gdpr-not-css.svg"></div>
      <div class="front">Front-end</div>
      <div class="back">Back-end</div>
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
  @apply w-full dark:bg-background-500 bg-white flex flex-col justify-center items-center gap-5 relative;
}

.front {
  @apply absolute top-10 left-10 text-white text-xl;
}

.back {
  @apply absolute top-10 right-10 text-primary-500 text-xl;
}


.image {
    @apply w-3/6 h-full hidden lg:flex justify-center;
}

.stack {
    @apply h-full w-full flex flex-col gap-4 lg:flex-row justify-around items-center absolute ;
}

.stack div{
  @apply absolute
}

.stack div:nth-child(1) {
  top: 5%;
  left: 20%;
}

.stack div:nth-child(2) {
  top: 25%;
  left: 10%;
}

.stack div:nth-child(3) {
  bottom: 25%;
  left: 10%;
}
.stack div:nth-child(4) {
  bottom: 5%;
  left: 20%;
}

.stack div:nth-child(5) {
  top: 5%;
  right: 20%;
}

.stack div:nth-child(6) {
  top: 25%;
  right: 10%;
}

.stack div:nth-child(7) {
  bottom: 25%;
  right: 10%;
}
.stack div:nth-child(8) {
  bottom: 5%;
  right: 20%;
}
</style>