<template>
  <div class="about-main">
    <div class="about-image">
      <div class="dark:hidden">
        <img src="/about-light.svg" alt="About image Light Theme" />
      </div>
      <div class="hidden dark:block">
        <img src="/about-dark.svg" alt="About image Dark Theme" />
      </div>
    </div>
    <div class="about-text">
      <div class="text">{{ $t("aboutme.part_1") }}</div>
      <div class="text">{{ $t("aboutme.part_2") }}</div>
      <div class="text">{{ $t("aboutme.part_3") }}</div>
      <div class="text">{{ $t("aboutme.part_4") }}</div>
      <div class="text">{{ $t("aboutme.part_5") }}</div>
    </div>
  </div>
</template>

<style scoped>
.about-main {
  height: calc(100% - 80px);
  @apply w-full flex justify-center items-center;
}

.about-image {
  @apply w-3/6 justify-end hidden xl:flex;
}

.about-text {
  transition: all 0.3s ease-in-out;
  @apply text-sm text-justify 2xl:text-lg lg:text-left  w-full xl:w-3/6 p-4 text-light-useful-500 dark:text-dark-useful-500 flex flex-col justify-center gap-4 leading-relaxed;
}
</style>
