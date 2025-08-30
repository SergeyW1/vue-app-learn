<script setup>
  import { onMounted, onUpdated } from 'vue';

  const data = defineModel({ type: String, required: true });

  onUpdated(() => {
    console.log('Input updated');
  });

  onMounted(() => {
    console.log('Input mounted');
  });
</script>

<template>
  <input v-model="data" class="input" />
</template>

<style scoped>
  .input {
    color: var(--color-primary);
    border: none;
    width: 260px;
    height: 53px;
    font-size: 18pt;
    padding: 15px 20px;
    border-radius: 10px;
    background: var(--color-bg-card);
    box-shadow: 1px 2px 4px 0 var(--color-bg-main);
  }
  .input::placeholder {
    color: var(--color-text-placeholder);
  }
</style>
