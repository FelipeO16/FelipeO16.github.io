<template>
  <div class="body dark">
    <!-- <HeaderMain /> -->
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="stacks">
      <Stacks />
    </section>
  </div>
</template>

<script setup>
const { locale } = useI18n();
// do a useHead with darkmode by localstorage
useHead({
  script: [
    `if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.setAttribute("data-theme", "dark");
    } else {
        document.documentElement.removeAttribute("data-theme");
    }`,
  ],
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

.body {
  font-family: "Raleway", sans-serif;
  @apply bg-light-background-500 dark:bg-dark-background-500 flex justify-center flex-col;
  transition: all 0.3s ease-in-out;
}

section {
  @apply w-full h-screen flex justify-center;
  transition: all 0.3s ease-in-out;
}
</style>
