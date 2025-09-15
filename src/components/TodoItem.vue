<script setup>
  import Btn from './Btn.vue';

  // Принимаем одну задачу как проп
  const props = defineProps({
    item: Object,
  });

  // Эмитим событие "delete", чтобы сказать родителю "удали эту задачу"
  const emit = defineEmits(['delete']);

  // Обработчик удаления — возвращает id задачи родителю
  const onDelete = () => {
    emit('delete', props.item.id);
  };
</script>

<template>
  <li>
    <!-- Заголовок задачи -->
    <span>{{ item.title }}</span>

    <!-- Кнопка удаления (вызывает onDelete) -->
    <Btn title="Удалить" @click="onDelete" />
  </li>
</template>

<style scoped lang="scss"></style>
