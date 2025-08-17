<script setup lang="ts">
  defineProps({
    id: Number,
    word: String,
    flipped: Boolean,
    status: String,
  });
</script>

<template>
  <div class="card">
    <div class="card__number">0{{ id }}</div>

    <div class="card__word">{{ word }}</div>

    <div class="card__actions">
      <button class="card__btn">Перевернуть</button>
    </div>
  </div>
</template>

<style scoped>
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 256px;
    height: 376px;
    border-radius: 10px;
    background: white;
    padding: 20px;
  }

  .card__word {
    text-align: center;
    font-size: 18px;
  }

  .card__actions {
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }

  .card__btn {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    border: none;
    background: white;
  }
</style>
