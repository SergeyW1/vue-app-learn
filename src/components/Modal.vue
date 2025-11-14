<script setup>
  import { defineModel, defineEmits } from 'vue';

  const open = defineModel('open');
  const emit = defineEmits(['add']);
</script>

<template>
  <div v-if="open" class="modal">
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal__content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;
    text-align: center;
  }
</style>
