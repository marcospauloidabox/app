<template>
  <div class="principal-menu">
    <ul>
      <li v-for="item in menu" :key="item.id">
        <component :is="item.icon" />
        <router-link :to="item.route">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps, type Component } from 'vue'

interface MenuItem {
  id: number
  name: string
  icon: Component
  route: string
}

const props = defineProps<{
  menu: MenuItem[]
}>()
</script>

<style scoped>
.principal-menu {
  font-size: large;
  text-decoration: none;
}
.principal-menu ul {
  list-style: none;
  padding: 0;
}
</style>
