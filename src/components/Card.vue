<script setup>
  import CloseSvg from './icons/CloseSvg.vue';
  import OpenSvg from './icons/OpenSvg.vue';

  defineProps({
    id: Number,
    wordEn: String,
    wordRus: String,
    flipped: Boolean,
  });

  const emit = defineEmits(['turn', 'close', 'open']);

  const handleTurn = (id) => {
    emit('turn', id);
  };

  const handleClose = (id) => {
    emit('close', id);
  };

  const handleOpen = (id) => {
    emit('open', id);
  };
</script>

<template>
  <div class="card">
    <div class="card__number">0{{ id }}</div>

    <div class="card__word">{{ flipped ? wordRus : wordEn }}</div>

    <div class="action-btn">
      <button v-if="!flipped" class="action-btn__turn cursor-btn" @click="handleTurn(id)">
        Перевернуть
      </button>

      <template v-else-if="flipped">
        <CloseSvg type="button" class="cursor-btn" @click="handleClose(id)" />

        <OpenSvg class="cursor-btn" @click="handleOpen(id)" />
      </template>
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

  .action-btn {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .action-btn__turn {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 15px;
    border: none;
    background: white;
  }

  .cursor-btn {
    cursor: pointer;
  }
</style>
