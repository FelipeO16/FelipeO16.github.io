<template>
  <header>
    <img src="pexels-kevin-ku-577585.jpg" class="banner w-full" />
    <a href="#" class="logo">.Dev</a>
    <nav>
      <ul>
        <li><a href="#" v-text="$t('menu.home')" /></li>
        <li><a href="#about" v-text="$t('menu.about')"/></li>
        <li><a href="#stacks" v-text="$t('menu.stacks')"/></li>
        <li><a href="#exps" v-text="$t('menu.exps')"/></li>
        <li><a href="#contact" v-text="$t('menu.contact')"/></li>
        <li>
          <HomeLang />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    onMounted(() => {
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
      });
    });
  },
};
</script>

<style scoped>
.body {
  min-height: 1000px;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 0 100px;
  background: #000;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  transition: 1s;
}

header.sticky {
  height: 100px;
}

header .banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s;
}

header.sticky .banner {
  opacity: 0.5;
}

header .logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 15vw;
  font-weight: 700;
  transition: 1s;
  text-decoration: none;
  z-index: 1;
  @apply text-primary-500
}

header.sticky .logo {
  position: absolute;
  font-size: 2em;
  left: 100px;
  transform: translate(0, -50%);
}

nav {
  position: relative;
  display: flex;
  z-index: 1;
}

nav ul {
  position: relative;
  transition: 0.25s;
  transform: translateX(100px);
  opacity: 0;
  @apply hidden lg:flex items-center;
}

header.sticky nav ul {
  transform: translateX(0);
  opacity: 1;
  transition-delay: 0.75s;
}

nav ul li {
  list-style: none;
}

nav ul li a {
  color: #fff;
  display: inline-block;
  padding: 10px 15px;
  font-size: 1.2em;
  text-decoration: none;
}

nav ul li a:hover {
  @apply text-primary-500
}
</style>
