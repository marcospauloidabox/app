<template>
  <div class="principal-menu">
    <ul>
      <li v-for="item in menu" :key="item.id">
        <router-link :to="item.route">
          <span class="menu-name">{{ item.name }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
interface MenuItem {
  id: number
  name: string
  icon: string
  route: string
}

const props = defineProps<{
  menu: MenuItem[]
}>()
</script>

<style scoped>
.principal-menu {
  font-size: 1.2rem;
  text-decoration: none;
}
.principal-menu ul {
  list-style: none;
  padding: 0;
}

.principal-menu li {
  margin-bottom: 1rem;
}

.menu-name {
  margin-left: 10px;
}
</style>
