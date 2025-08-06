<script setup lang="ts">
  const props = defineProps({
    name: String,
    age: Number,
  });
</script>

<template>
  <div class="user">
    <div class="user-name">{{ props.name }}</div>
    <div class="user-age">{{ props.age }}</div>
  </div>
</template>

<style scoped></style>
