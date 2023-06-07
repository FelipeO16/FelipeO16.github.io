<template>
  <div class="api-form">
    <div class="input">
      <div class="method">GET</div>
      <div class="flex items-center">
        <label for="api-link">https://myportfolio.com/stacks/</label>
        <input type="text" v-model="api.selected" id="api-link" />
      </div>
      <button @click="api.getResponse(api.selected, locale)">
        {{ $t("api.send") }} ►
      </button>
    </div>
    <div
      class="request-stats flex justify-between items-center text-white w-3/6 px-4"
    >
      <div class="request-stats flex w-2/4 justify-around">
        <div
          class="request-status-text"
          :class="api.isError ? 'bg-red-500' : 'bg-green-500'"
        >
          {{ api.isError ? "404 NF" : "200 OK" }}
        </div>
        <div class="request-size">
          <div class="request-size-text">253 ms</div>
        </div>
        <div class="request-time">
          <div class="request-time-text">1647 B</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  @apply w-full h-14 flex border-b border-dark-primary-500;
}

.method {
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0.05em;
  @apply w-2/12 h-full flex justify-center items-center text-dark-primary-500 text-lg select-none;
}

.input {
  @apply w-2/5 h-full flex items-center text-white justify-start gap-4;
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
  @apply p-2  rounded-md;
}
.request-size-text,
.request-time-text {
  @apply bg-gray-500 p-2 rounded-md;
}
</style>
