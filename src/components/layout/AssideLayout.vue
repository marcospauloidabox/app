<template>
  <div class="asside-layout">
    <menu-item :menu="menuItens" />
  </div>
</template>
<script>
import Menu from '../base/AssideMenu.vue'
import IconHome from '../icons/IconCommunity.vue'

export default {
  name: 'AssideLayout',
  components: {
    'menu-item': Menu,
    'home': IconHome
  },
  data() {
    return {
      menuItens: [
        { id: 1, name: 'Home', icon: 'home', route: '/' },
        { id: 2, name: 'Products', icon: 'products', route: '/products' }
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
