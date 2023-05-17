<template>
  <div class="light-button">
    <button class="bt" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="light-holder">
        <div class="dot" :class="{'bg-white': hover, 'bg-black': !hover}"></div>
        <div class="light"></div>
      </div>
            <div class="button-holder">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M70 6.6665H10L16.6667 66.6665L40 73.3332L63.3333 66.6665L70 6.6665ZM56.0807 26.9399H30.5599L31.1719 34.2056H55.4687L53.6458 55.6639L40 60.0129L39.8698 59.9608L26.3802 55.6639L25.638 46.9139H32.2526L32.5391 50.3123L40.0781 51.979L47.474 50.3123L48.2682 41.1327H25.1432L23.3594 19.9998H56.6797L56.0807 26.9399Z"/>
                </svg>
                <p>HTML 5</p>
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
  fill: rgb(242, 157, 88);
}

.light-button button.bt:hover .button-holder {
  color: rgb(242, 157, 88);
  outline: rgb(242, 157, 88) 2px solid;
  outline-offset: 2px;
}

.light-button button.bt:hover .light-holder .light {
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgb(242, 157, 88) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
}
</style>