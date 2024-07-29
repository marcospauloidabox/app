<template>
  <div class="asside-layout" :class="{ 'is-collapsed': !isDesktop && !isMenuOpen }">
    <menu-item :menu="menuItens" />
  </div>
</template>

<script lang="ts">
import Menu from '../base/AssideMenu.vue'
import { mdiHome, mdiCarMultiple } from '@mdi/js'
import { ref, onMounted, onUnmounted, defineComponent, PropType } from 'vue'

export default defineComponent({
  components: {
    'menu-item': Menu
  },
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const isDesktop = ref(true)

    const checkWindowSize = () => {
      isDesktop.value = window.innerWidth >= 769
    }

    onMounted(() => {
      checkWindowSize()
      window.addEventListener('resize', checkWindowSize)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', checkWindowSize)
    })

    return {
      menuItens: [
        { id: 1, name: 'Home', route: 'home' },
        { id: 2, name: 'Produtos', route: 'products' }
      ],
      isDesktop
    }
  }
})
</script>

<style scoped>
.asside-layout {
  grid-area: A;
  transition: all 0.3s ease;
  padding-left: 20px; /* Reduzido de 40px para 20px */
  margin-top: 40px;
}

.is-collapsed {
  display: none;
}

@media (max-width: 768px) {
  .asside-layout {
    position: fixed;
    top: 0;
    left: 0;
    width: 150px; /* Reduzido de 200px para 150px */
    height: 100%;
    background-color: white;
    z-index: 1000;
    padding-left: 10px; /* Adicionado padding para melhor visualização */
    margin-top: 50px;
    height: 150px;
  }
}
</style>
