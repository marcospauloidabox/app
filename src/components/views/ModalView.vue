<template>
  <v-dialog v-model="internalDialog" max-width="650px">
    <!-- Mantém o tamanho padrão -->
    <v-card class="custom-card">
      <v-card-title class="headline">{{ product.name }}</v-card-title>
      <v-card-text>
        <img :src="product.image" />
        <p>R$ {{ product.price.toFixed(2) }}</p>
        <p>{{ product.description }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="closeDialog">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      internalDialog: this.dialog
    }
  },
  watch: {
    dialog(newVal) {
      this.internalDialog = newVal
    }
  },
  methods: {
    closeDialog() {
      this.$emit('update:dialog', false)
    }
  }
}
</script>

<style scoped>
.custom-card {
  height: 600px;
  width: 650px;
}

@media (max-width: 768px) {
  .custom-card {
    max-height: 90vh;
    max-width: 90vw;
    overflow-y: auto;
  }
  .custom-card img {
    max-width: 100%;
    height: auto;
  }
}
</style>
