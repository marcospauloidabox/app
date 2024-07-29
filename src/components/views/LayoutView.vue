<script lang="ts">
import { defineComponent, ref } from 'vue'
import AssideLayout from '../layout/AssideLayout.vue'
import ContentLayout from '../layout/ContentLayout.vue'
import HeaderLayout from '../layout/HeaderLayout.vue'

export default defineComponent({
  components: {
    'asside-layout': AssideLayout,
    'content-layout': ContentLayout,
    'header-layout': HeaderLayout
  },
  setup() {
    const isMenuOpen = ref(false)
    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value
    }
    return { isMenuOpen, toggleMenu }
  }
})
</script>

<template>
  <main class="main">
    <header-layout :isMenuOpen="isMenuOpen" :toggleMenu="toggleMenu" />
    <asside-layout :isMenuOpen="isMenuOpen" />
    <content-layout />
  </main>
</template>

<style scoped>
.main {
  display: grid;
  @media screen and (min-width: 769px) {
    grid-template-columns: 280px auto;
    grid-template-rows: 70px auto;
    grid-template-areas:
      'H H'
      'A C';
  }
  @media screen and (max-width: 768px) {
    grid-template-rows: 70px auto;
    grid-template-columns: 100%;
    grid-template-areas:
      'H H'
      'C C';
  }
}
</style>
