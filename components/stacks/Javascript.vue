<template>
  <div class="light-button">
    <button class="bt" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="light-holder">
        <div
          class="dot"
          :class="{ 'bg-white': hover, 'bg-black': !hover }"
        ></div>
        <div class="light"></div>
      </div>
      <div class="button-holder">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_94_419)">
            <path
              d="M5.78251 71.4864L-0.916199 0L79.0838 0.143655L72.0006 71.4864L39.3857 79.7327L5.78251 71.4864Z"
            />
            <path
              d="M40.3019 72.9626V6.94189L73.2465 7.03766L67.3716 66.106L40.3019 72.9626Z"
            />
            <path
              d="M36.7742 14.7808H28.0645V58.7224L21.2903 57.5957V51.6805L13.2258 50.5538V63.7926L36.7742 69.1445V14.7808ZM43.3078 14.7808H67.4194L65.8065 23.2029H52.5123V37.0237H65.8065L64.1936 64.9193L43.3078 69.1445V60.4125L57.4194 56.1873L58.2342 44.6386L43.3078 46.5258V14.7808Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_94_419">
              <rect width="80" height="80" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>Javascript</p>
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
  fill: #e9ca32;
}

.light-button button.bt:hover .button-holder {
  color: #e9ca32;
  outline: #e9ca32 2px solid;
  outline-offset: 2px;
}

.light-button button.bt:hover .light-holder .light {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    #e9ca32 0%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
