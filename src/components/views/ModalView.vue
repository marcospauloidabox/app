<template>
  <v-dialog v-model="internalDialog" width="400">
    <v-card class="custom-card">
      <v-card-title class="headline">{{ product.name }}</v-card-title>
      <v-card-text>
        <img :src="product.image" />
        <p>R$ {{ product.price.toFixed(2) }}</p>
        <p>{{ product.description }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="closeDialog">Close</v-btn>
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

<style>
.custom-card {
  height: 600px;
  width: 650px;
}
</style>
