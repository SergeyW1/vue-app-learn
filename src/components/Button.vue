<script setup></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped>
  .button {
    width: 335px;
    height: 68px;
    border-radius: 100px;
    font-family: var(--font), serif;
    font-size: 24px;
    color: var(--color-text);
    border: 0;
    background-color: var(--color-bg);
    cursor: pointer;
  }
</style>
