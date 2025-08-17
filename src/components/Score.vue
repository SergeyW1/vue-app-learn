<script setup lang="ts">
  defineProps({
    score: Number,
  });
</script>

<template>
  <div class="score">{{ score }}</div>
</template>

<style scoped>
  .score {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #008bfe;
  }
</style>
