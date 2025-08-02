<script setup>
  import { ref } from 'vue';

  const today = ref(new Date().toLocaleDateString());
</script>

<template>
  <p>Сегодняшняя дата: {{ today }}</p>
</template>

<style scoped></style>
