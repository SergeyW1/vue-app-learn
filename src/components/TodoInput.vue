<script setup>
  defineProps({
    title: String,
  });

  const model = defineModel({ type: String });
</script>

<template>
  <input v-model="model" type="text" :placeholder="title" />
</template>

<style scoped></style>
