<template>
  <!-- <div id="home"> -->
  <div class="container">
    <div class="home">
      <HeaderMain />
      <HomeMain />
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
#home {
  @apply w-screen h-screen flex justify-center;
}

.home {
  @apply w-full h-full flex flex-col justify-center gap-8 items-center;
}

.container {
  @apply flex flex-col items-center;
}
</style>
