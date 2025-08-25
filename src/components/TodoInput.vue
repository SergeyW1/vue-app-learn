<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
  });

  const newTodo = defineModel({ type: String });
</script>

<template>
  <input v-model="newTodo" type="text" :placeholder="title" />
</template>

<style scoped></style>
