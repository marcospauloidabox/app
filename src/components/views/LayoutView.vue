<script lang="ts">
import { defineComponent } from 'vue'
import AssideLayout from '../layout/AssideLayout.vue'
import HeaderLayout from '../layout/HeaderLayout.vue'
import ContentLayout from '../layout/ContentLayout.vue'

export default defineComponent({
  components: {
    AssideLayout,
    ContentLayout,
    HeaderLayout
  }
})
</script>

<template>
  <main class="main">
    <HeaderLayout />
    <AssideLayout />
    <ContentLayout />
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
