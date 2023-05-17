<template>
  <div class="light-button">
    <button class="bt" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="light-holder">
        <div class="dot" :class="{'bg-white': hover, 'bg-black': !hover}"></div>
        <div class="light"></div>
      </div>
            <div class="button-holder">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6.66699L16.6667 66.667L39.974 73.3337L63.3333 66.667L70 6.66699H10ZM55.7552 34.4925L54.4792 55.2998L40.0911 60.0003L25.7031 55.2998L25.1562 45.3519H32.4479L32.6302 49.8701L40.0911 52.4092L47.5651 49.8701L48.112 41.7321H32.0833L31.7187 34.4925H48.4635L49.0104 27.2529H23.8802L23.3333 20.0264H56.6667L55.7552 34.4925Z"/>
              </svg>
                <p>CSS 3  </p>
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
  fill: #264de4;
}

.light-button button.bt:hover .button-holder {
  color: #264de4;
  outline: #264de4 2px solid;
  outline-offset: 2px;
}

.light-button button.bt:hover .light-holder .light {
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, #264de4 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
}
</style>