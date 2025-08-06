<script setup lang="ts">
  defineProps({
    title: String,
    borderColor: String,
  });
</script>

<template>
  <div class="card" :style="{ border: '2px solid ' + borderColor }">
    <h2>{{ title }}</h2>

    <div class="content">
      <slot></slot>
    </div>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
  .card {
    padding: 16px;
    margin-bottom: 20px;
    border-radius: 8px;
  }
  .content {
    margin: 12px 0;
  }
  .footer {
    text-align: right;
  }
</style>
