<script lang="ts">
import { defineComponent } from 'vue'
import { AssideLayout, ContentLayout, HeaderLayout } from '../layout'

export default defineComponent({
  components: {
    'asside-layout': AssideLayout,
    'content-layout': ContentLayout,
    'header-layout': HeaderLayout
  }
})
</script>

<template>
  <main class="main">
    <header-layout />
    <asside-layout />
    <content-layout />
  </main>
</template>

<style scoped>
.main {
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 280px auto;
  grid-template-areas:
    'H H'
    'A C';
}
</style>
