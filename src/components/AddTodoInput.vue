<script setup>
  const newTodo = defineModel({ type: String });
</script>

<template>
  <input v-model="newTodo" type="text" placeholder="Новое задание" />
</template>

<style scoped></style>
