<template>
  <div class="api-form">
    <div class="input">
      <div class="method">GET</div>
      <div class="flex items-center">
        <label for="api-link">https://myportfolio.com/stacks/</label>
        <input type="text" v-model="api.selected" id="api-link" />
      </div>
      <button @click="api.getResponse(api.selected, locale)">
        {{ $t("api.send") }}
        <span class="hidden sm:inline-block lg:hidden xl:inline-block">►</span>
      </button>
    </div>
    <div
      class="request-stats flex justify-between items-center text-white lg:px-4"
    >
      <div class="requst-mobile">
        <ClientOnly>
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            background-color="#ffffff00"
            :ellipsis="false"
          >
            <div class="flex-grow" />
            <el-sub-menu index="2">
              <template #title><span class="menu">Requests</span></template>
              <el-menu-item index="2-1"
                ><span class="dropdown-text" @click="api.selected = 'frontend'"
                  >GET_frontend</span
                ></el-menu-item
              >
              <el-menu-item index="2-2"
                ><span class="dropdown-text" @click="api.selected = 'backend'"
                  >GET_backend</span
                ></el-menu-item
              >
              <el-menu-item index="2-3"
                ><a href="#about" class="dropdown-text"
                  >GET_aboutme</a
                ></el-menu-item
              >
              <el-menu-item index="2-4"
                ><a href="#contact" class="dropdown-text"
                  >POST_contact</a
                ></el-menu-item
              >
            </el-sub-menu>
          </el-menu>
        </ClientOnly>
      </div>
      <div class="request-status">
        <div
          class="request-status-text"
          :class="api.isError ? 'bg-red-500' : 'bg-green-500'"
        >
          {{ api.isError ? "404 NF" : "200 OK" }}
        </div>
        <div class="request-response">
          <div class="request-response-text">253 ms</div>
        </div>
        <div class="request-size">
          <div class="request-size-text">1647 B</div>
        </div>
      </div>

      <div
        class="request-time justify-end items-center h-full text-xl hidden lg:flex w-2/4"
      >
        <div class="request-time-text font-mono">1m Ago</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { useApiStore } from "@/stores/api";
let api = useApiStore();
const { locale } = useI18n();
</script>

<style scoped>
* {
  letter-spacing: 0.05em;
}

.api-form {
  background-color: #161616;
  @apply w-full h-1/6 lg:h-20 flex flex-col lg:flex-row border-b border-dark-primary-500;
}

.method {
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.05em;
  @apply w-2/12 h-full flex justify-center items-center text-dark-primary-500 text-lg select-none;
}

.input {
  @apply w-full lg:w-2/5 h-full flex items-center text-white justify-start gap-4 text-sm;
}

input,
label {
  @apply text-xs;
}

input {
  @apply bg-transparent outline-none w-7/12 text-white;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
  -webkit-transition-delay: 9999s;
}

button {
  font-family: "Raleway";
  @apply p-2 h-full bg-dark-primary-500 w-3/12 font-medium;
}

.request-status-text {
  @apply p-2 lg:p-2  rounded-md text-xs xl:text-lg;
}
.request-response-text,
.request-size-text {
  @apply bg-gray-500 p-2 lg:p-2 rounded-md text-xs xl:text-lg;
}

.request-stats {
  @apply flex w-full lg:w-3/5 h-3/6 lg:h-full items-center;
}

.request-status {
  @apply flex w-4/6 gap-4 font-mono;
}

.requst-mobile {
  @apply w-2/6 flex justify-center items-center;
}
.el-menu,
.el-menu--horizontal {
  @apply block border-none lg:hidden;
}
.menu {
  @apply w-full h-full text-sm text-white;
}
</style>
