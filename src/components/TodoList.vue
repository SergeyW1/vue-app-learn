<script setup>
  defineProps({
    todos: Array,
  });
  const emit = defineEmits(['delete']);

  const handleDeleteTodo = (id) => {
    emit('delete', id);
  };
</script>

<template>
  <ul>
    <slot></slot>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.title }}

      <button @click="handleDeleteTodo(todo.id)">Удалить</button>
    </li>
  </ul>
</template>

<style scoped></style>
