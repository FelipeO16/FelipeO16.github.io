<template>
  <div class="light-button">
    <button class="bt" @mouseover="hover = true" @mouseleave="hover = false">
      <div class="light-holder">
        <div class="dot" :class="{'bg-white': hover, 'bg-black': !hover}"></div>
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
          <g clip-path="url(#clip0_94_424)">
            <path
              d="M64 0H80L40 79.9276L0 0H15.8H30.6L40 18.5339L49.2 0H64Z"
            />
            <path
              d="M0 0L40 79.9276L80 0H64L40 47.9566L15.8 0H0Z"
            />
            <path
              v-show="hover"
              d="M15.8 0L40 48.1882L64 0H49.2L40 18.5339L30.6 0H15.8Z"
              fill="#35495E"
            />
          </g>
          <defs>
            <clipPath id="clip0_94_424">
              <rect width="80" height="80" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <p>VueJS</p>
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
  fill: #41B883;
}

.light-button button.bt:hover .button-holder {
  color: #41B883;
  outline: #41B883 2px solid;
  outline-offset: 2px;
}

.light-button button.bt:hover .light-holder .light {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    #41B883 0%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
