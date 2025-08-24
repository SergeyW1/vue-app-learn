<script setup>
  import CloseSvg from './icons/CloseSvg.vue';
  import OpenSvg from './icons/OpenSvg.vue';

  defineProps({
    id: Number,
    wordEn: String,
    wordRus: String,
    flipped: Boolean,
    status: String,
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
    <div class="card__header">
      <div>0{{ id }}</div>

      <div v-if="status === 'done'">
        <CloseSvg width="50" height="50" />
      </div>

      <div v-if="status === 'incomplete'">
        <OpenSvg width="50" height="50" />
      </div>
    </div>

    <div class="card__word">{{ flipped ? wordRus : wordEn }}</div>

    <div class="action-btn">
      <p v-if="status === 'done' && flipped">Завершено</p>

      <p v-else-if="status === 'incomplete' && flipped">Не завершено</p>

      <template v-else-if="flipped && status === 'new'">
        <CloseSvg type="button" class="cursor-btn cursor-btn--done" @click="handleClose(id)" />

        <OpenSvg class="cursor-btn cursor-btn--incomplete" @click="handleOpen(id)" />
      </template>

      <button v-else-if="!flipped" class="action-btn__turn cursor-btn" @click="handleTurn(id)">
        Перевернуть
      </button>
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

  .card__header {
    display: flex;
    justify-content: space-between;
    width: 150px;
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

  .cursor-btn--done {
    width: 24px;
    height: 24px;
  }

  .cursor-btn--incomplete {
    width: 24px;
    height: 24px;
  }
</style>
