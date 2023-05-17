<template>
  <div class="light-button">
    <button class="bt" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="light-holder">
        <div class="dot" :class="{'bg-white': hover, 'bg-black': !hover}"></div>
        <div class="light"></div>
      </div>
            <div class="button-holder">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.0003 80C7.73896 80 0 72.261 0 40.0003C0 7.73946 7.73896 0 40.0003 0C72.2606 0 80 7.73896 80 40.0003C80 72.2606 72.261 80 40.0003 80ZM28.6761 19.7965L16.1304 48.3093C15.5598 49.6947 15.0712 51.4868 15.0712 53.0346C15.0712 60.122 20.0408 65.0916 27.1283 65.0916C29.451 65.0916 31.38 64.4816 33.3405 63.8611C35.3679 63.2191 37.4323 62.5666 40.0003 62.5666C42.5977 62.5666 44.6106 63.2131 46.5996 63.8521C48.5406 64.4756 50.4576 65.0916 52.8717 65.0916C59.9592 65.0916 64.9288 60.122 64.9288 53.0346C64.9288 51.4868 64.4397 49.6947 63.8696 48.3098L51.3244 19.7965C49.2061 14.9898 45.1322 12.3828 40.0003 12.3828C34.8678 12.3828 30.7944 14.9898 28.6761 19.7965ZM27.6169 52.7908L40.0003 24.7657L52.2202 52.7898C48.7169 51.0791 44.3179 50.2642 39.9997 50.2642C35.5192 50.2642 31.2831 51.0801 27.6169 52.7908Z"/>
              </svg>

              <p>Adonis.js</p>
            </div>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const hover = ref(false);
</script>

<style scoped>
.light-button button.bt {
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
  outline: none;
  background: none;
  border: none;
}

.light-button button.bt .button-holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  background-color: #0a0a0a;
  border-radius: 5px;
  color: #0f0f0f;
  font-weight: 700;
  transition: 300ms;
  outline: #0f0f0f 2px solid;
  outline-offset: 20;
}

.light-button button.bt .button-holder svg {
  height: 50px;
  fill: #0f0f0f;
  transition: 300ms;
}

.light-button button.bt .light-holder {
  position: absolute;
  height: 200px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.light-button button.bt .light-holder .dot {
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  z-index: 2;
}

.light-button button.bt .light-holder .light {
  position: absolute;
  top: 0;
  width: 200px;
  height: 200px;
  clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
  background: transparent;
}

.light-button button.bt:hover .button-holder svg {
  fill: #5A46FF;
}

.light-button button.bt:hover .button-holder {
  color: #5A46FF;
  outline: #5A46FF 2px solid;
  outline-offset: 2px;
}

.light-button button.bt:hover .light-holder .light {
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, #5A46FF 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
}
</style>