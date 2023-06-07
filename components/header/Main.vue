<template>
  <div class="header">
    <div class="header-content">
      <HeaderLogo />
      <HeaderMenu />
    </div>
    <ClientOnly>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo mobile"
        mode="horizontal"
        background-color="#ffffff00"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0" class="p-0"><HeaderLogo /></el-menu-item>
        <div class="flex-grow" />
        <el-sub-menu index="2">
          <template #title><span class="menu">Menu</span></template>
          <el-menu-item index="2-1"
            ><a href="#home" v-text="$t('menu.home')"
          /></el-menu-item>
          <el-menu-item index="2-2"
            ><a href="#about" v-text="$t('menu.about')"
          /></el-menu-item>
          <el-menu-item index="2-3"
            ><a href="#stacks" v-text="$t('menu.stacks')"
          /></el-menu-item>
          <el-menu-item index="2-4"
            ><a href="#exps" v-text="$t('menu.exps')"
          /></el-menu-item>
          <el-menu-item index="2-5"
            ><a href="#contact" v-text="$t('menu.contact')"
          /></el-menu-item>
          <el-sub-menu index="3">
            <template #title
              ><span class="">{{ $t("menu.language") }}</span></template
            >
            <el-menu-item index="3-1" @click="(locale = 'en'), api.change('en')"
              >en</el-menu-item
            >
            <el-menu-item index="3-2" @click="(locale = 'pt'), api.change('pt')"
              >pt</el-menu-item
            >
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </ClientOnly>
  </div>
</template>

<style scoped>
.header,
.header-content {
  @apply w-full h-20 justify-between xl:px-8 bg-transparent bg-light-background-500 dark:bg-dark-background-500 top-0;
  transition: all 0.3s ease-in-out;
}

.menu {
  @apply text-light-useful-500 dark:text-dark-useful-500;
}
.header-content {
  @apply hidden xl:flex;
}

.mobile {
  @apply flex w-screen xl:hidden bg-transparent;
}

.menu:hover {
  @apply bg-transparent;
}

.el-menu-demo {
  @apply bg-transparent;
}
</style>

<script setup lang="ts">
import { useApiStore } from "@/stores/api";
let api = useApiStore();

const activeIndex = ref("1");
const menu = ref("Menu");
const { locale } = useI18n();

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

onMounted(() => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header?.classList.toggle("fixed", window.scrollY > 0);
  });
});
</script>
