<template>
    <a href="#">
        <div class="text">
          <span v-for="item,index in $t('back').split(' ')" :key="index">
            {{ item }}
          </span>
        </div>
        <div class="clone">
          <span v-for="item,index in $t('back').split(' ')" :key="index">
            {{ item }}
          </span>
        </div>
        <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
    </a>
</template>

<style scoped>
a {
  width: 9vw;
  height: 56px;
  overflow: hidden;
  border: none;
  color: #fff;
  background: none;
  position: relative;
  padding-bottom: 2em;
}

a > div,a > svg {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
}

a:before {
  content: "";
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  width: 100%;
  transform: scaleX(0);
  transform-origin: bottom right;
  background: currentColor;
  transition: transform 0.25s ease-out;
}

a:hover:before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

a .clone > *,a .text > * {
  opacity: 1;
  font-size: 1.3rem;
  transition: 0.2s;
  margin-left: 4px;
}

a .clone > * {
  transform: translateY(60px);
}

a:hover .clone > * {
  opacity: 1;
  transform: translateY(0px);
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

a:hover .text > * {
  opacity: 1;
  transform: translateY(-60px);
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
}

a:hover .clone > :nth-child(1) {
  transition-delay: 0.15s;
}

a:hover .clone > :nth-child(2) {
  transition-delay: 0.2s;
}

a:hover .clone > :nth-child(3) {
  transition-delay: 0.25s;
}

a:hover .clone > :nth-child(4) {
  transition-delay: 0.3s;
}
/* icon style and hover */
a svg {
  width: 20px;
  right: 0;
  top: 50%;
  transform: translateY(-50%) rotate(-50deg);
  transition: 0.2s ease-out;
}

a:hover svg {
  transform: translateY(-50%) rotate(-90deg);
}
</style>