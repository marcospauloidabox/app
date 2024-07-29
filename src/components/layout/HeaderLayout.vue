<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { mdiMenu } from '@mdi/js'

export default defineComponent({
  props: {
    isMenuOpen: {
      type: Boolean as PropType<boolean>,
      required: true
    },
    toggleMenu: {
      type: Function as PropType<() => void>,
      required: true
    }
  },
  setup(props) {
    return { mdiMenu }
  }
})
</script>

<template>
  <div class="header-layout">
    <button class="hamburger" @click="toggleMenu">
      <svg :width="24" :height="24" viewBox="0 0 24 24">
        <path :d="mdiMenu" fill="white" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.header-layout {
  grid-area: H;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 70px;
}

.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
}
</style>
