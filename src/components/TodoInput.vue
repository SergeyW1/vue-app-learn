<script setup>
  const model = defineModel({ type: String });
</script>

<template>
  <input v-model="model" type="text" placeholder="Введите новую задачу" />
</template>

<style scoped></style>
