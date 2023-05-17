<template>
  <div class="body">
    <div class="test">
      <HomeHeader />
      <section id="home">
          <!-- <HomeLang />
          <DefaultBack /> -->
          <HomeSect />
      </section>
      <section id="about">
          <AboutSect />
      </section>
      <!-- <p>{{ $t('welcome') }}</p> -->
    </div>
  </div>
</template>

<style scoped>
html {
  scroll-behavior: smooth;
}
.body {
  scroll-behavior: smooth;
  @apply bg-primary-500
}
.test {
  height: calc(100vh + 100px);
  @apply bg-primary-500
}

#home {
  padding-top: 100px;
}

section {
  @apply w-full flex flex-col justify-start bg-primary-500
}

</style>
