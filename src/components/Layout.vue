<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="layout__text">ЗАПОМНИ СЛОВО</div>

    <div class="layout__counter">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
  .layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .layout__text {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #222222;
  }

  .layout__counter {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 12px 24px;
    border-radius: 24px;
    border: none;
    background-color: #cce8ff;
  }
</style>
