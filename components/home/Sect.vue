<template>
  <div class="home">
    <div class="image"><img class="w-3/6" src="undraw_hello_re_3evm.svg"></div>
    <div class="hello" v-text="$t('hello')" />
    <div class="dev-text" v-text="$t('devText')" />
    <div class="welcome" v-text="$t('welcome')" />
    <div class="start" v-text="$t('start')" />
    <a href="#about" class="yes" v-text="$t('yes')" />
  </div>
</template>

<style scoped>
.home {
  margin-top: 100px;
  height: calc(100vh - 100px);
  @apply w-full dark:bg-background-500 bg-white flex flex-col justify-center  px-10 py-2.5 gap-5;
}

.image {
  @apply w-full hidden lg:flex justify-center;
}

.hello {
  @apply text-lg text-primary-500;
}

.hello::before {
  content: "👋";
  @apply mr-2;
}

.dev-text {
  @apply text-6xl text-white;
}

.welcome {
  @apply text-xl text-secondary-500;
}

.start {
  @apply text-3xl text-primary-500 w-full flex justify-center items-center
}

.yes {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;

  width: 241px;
  height: 77px;

  /* red

  red
  */
  background: #4994EB;
  border-radius: 48px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  @apply text-white self-center
}
</style>