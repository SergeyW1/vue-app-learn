<script setup></script>

<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
  .button {
    border: none;
    height: 53px;
    border-radius: 10px;
    background: var(--gradient);
    padding: 14px;
    font-family: var(--font), serif;
    font-size: 20px;
    width: 100%;
    font-weight: 600;
    color: var(--color-primary);
    cursor: pointer;
    display: flex;
    gap: 9px;
    align-items: center;
    justify-content: center;
  }
  .button:hover {
    background: var(--gradient-inverted);
  }
</style>
