<template>
  <div class="asside-layout">
    <menu-item :menu="menuItens" />
  </div>
</template>

<script>
import Menu from '../base/AssideMenu.vue'
import { mdiHome, mdiCarMultiple } from '@mdi/js'

export default {
  name: 'AssideLayout',
  components: {
    'menu-item': Menu
  },
  data() {
    return {
      menuItens: [
        { id: 1, name: 'Home', icon: mdiHome, route: 'home' },
        { id: 2, name: 'Products', icon: mdiCarMultiple, route: 'products' }
      ]
    }
  }
}
</script>

<style>
.asside-layout {
  grid-area: A;
}

.asside-layout div {
  padding: 30%;
}
</style>