<script lang="ts">
import Asside from '../layout/AssideLayout.vue'
import Content from '../layout/ContentLayout.vue'
import Header from '../layout/HeaderLayout.vue'

export default {
  components: {
    'asside-layout': Asside,
    'content-layout': Content,
    'header-layout': Header
  }
}
</script>

<template>
  <main class="main">
    <header-layout />
    <asside-layout />
    <content-layout />
  </main>
</template>
<style>
.main {
  display: grid;
  grid-template-rows: 70px auto;
  grid-template-columns: 280px auto;
  grid-template-areas:
    'H H'
    'A C';
}
</style>
