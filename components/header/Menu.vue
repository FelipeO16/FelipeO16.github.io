<template>
  <div class="menu-list">
    <ul class="list">
      <li><a href="#home" v-text="$t('menu.home')" /></li>
      <li><a href="#about" v-text="$t('menu.about')" /></li>
      <li><a href="#stacks" v-text="$t('menu.stacks')" /></li>
      <li><a href="#exps" v-text="$t('menu.exps')" /></li>
      <li><a href="#contact" v-text="$t('menu.contact')" /></li>
      <li class="flex gap-4 items-center">
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ locale }}
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="(locale = 'en'), api.change('en')"
                ><span class="dropdown-text">en</span></el-dropdown-item
              >
              <el-dropdown-item @click="(locale = 'pt'), api.change('pt')"
                ><span class="dropdown-text">pt</span></el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <HeaderDarkmode />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.el-dropdown-link {
  @apply text-light-secondary-500 dark:text-dark-useful-500 outline-none text-lg;
}
.menu-list {
  font-family: "Raleway", sans-serif;
  @apply w-3/5 h-full;
}

.list {
  color: #b5b5b5;
  @apply flex justify-end gap-12 items-center h-full text-xl lowercase text-light-secondary-500 dark:text-dark-secondary-500;
}

.dropdown-text {
  @apply text-light-secondary-500 dark:text-dark-background-500 text-lg;
}
</style>
<script lang="ts" setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { useApiStore } from "@/stores/api";

const { locale } = useI18n();
const api = useApiStore();
</script>
