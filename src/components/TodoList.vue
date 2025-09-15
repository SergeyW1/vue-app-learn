<script setup>
  import TodoItem from './TodoItem.vue';

  // Родитель передаёт сюда массив задач
  defineProps({
    items: Array,
  });

  // Эмитим событие "delete" наружу (в TodoApp)
  const emit = defineEmits(['delete']);

  // Обработчик удаления задачи, пробрасывает id в родителя
  const onDelete = (id) => {
    emit('delete', id);
  };
</script>

<template>
  <!-- Если задачи есть — рендерим список -->
  <ul v-if="items.length">
    <!-- Для каждой задачи рендерим компонент TodoItem -->
    <!-- Передаём сам объект задачи через :item -->
    <!-- Слушаем событие @delete и пробрасываем его наверх -->
    <TodoItem v-for="item in items" :key="item.id" :item="item" @delete="onDelete" />
  </ul>
</template>
