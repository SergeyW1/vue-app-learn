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
  <!-- Корневой контейнер карточки -->
  <div class="card">
    <!-- Шапка: слева номер, справа иконка статуса -->
    <div class="card__header">
      <!-- Номер карточки (ведущий 0 — чисто для вида) -->
      <div>0{{ id }}</div>

      <!-- ИКОНКИ СТАТУСА.
           Здесь два независимых v-if: покажется только одна иконка,
           если status строго 'done' или строго 'incomplete'. -->
      <div v-if="status === 'incomplete'">
        <!-- Иконка "завершено" -->
        <CloseSvg width="50" height="50" />
      </div>

      <div v-if="status === 'done'">
        <!-- Иконка "не завершено" -->
        <OpenSvg width="50" height="50" />
      </div>
      <!-- Примечание: при status === 'new' иконки нет — это ожидаемо. -->
    </div>

    <!-- Основное слово на карточке:
         flipped ? показываем русское слово : иначе английское -->
    <div class="card__word">{{ flipped ? wordRus : wordEn }}</div>

    <!-- Блок действий под словом -->
    <div class="action-btn">
      <!-- КРУПНАЯ РАЗВИЛКА ПО СТОРОНЕ КАРТОЧКИ.
           Если карточка перевёрнута (flipped === true) —
           показываем либо текст статуса, либо кнопки смены статуса. -->
      <template v-if="flipped">
        <!-- Если статус 'done' — просто сообщаем "Завершено" -->
        <p v-if="status === 'done'">Завершено</p>

        <!-- Иначе, если статус 'incomplete' — "Не завершено" -->
        <p v-else-if="status === 'incomplete'">Не завершено</p>

        <!-- Иначе, если статус 'new' — показываем ДЕЙСТВИЯ:
             две иконки-кнопки, чтобы пометить карточку как done или incomplete.
             Клики отдают событие наверх (родителю), он меняет статус. -->
        <template v-else-if="status === 'new'">
          <!-- Пометить как 'done' -->
          <CloseSvg type="button" class="cursor-btn cursor-btn--done" @click="handleClose(id)" />

          <!-- Пометить как 'incomplete' -->
          <OpenSvg class="cursor-btn cursor-btn--incomplete" @click="handleOpen(id)" />
        </template>
        <!-- Если статус окажется неизвестным — внутри этого v-if ничего не покажем. -->
      </template>

      <!-- ЕСЛИ КАРТОЧКА НЕ ПЕРЕВЁРНУТА (flipped === false):
           показываем единственную кнопку "Перевернуть".
           По клику эмитим событие, родитель меняет flipped. -->
      <button v-else-if="!flipped" class="action-btn__turn cursor-btn" @click="handleTurn(id)">
        Перевернуть
      </button>
      <!-- Итого логика простая:
           - Лицевая сторона: всегда одна кнопка "Перевернуть".
           - Обратная сторона: либо текст статуса (done/incomplete), либо кнопки для выбора (new). -->
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
