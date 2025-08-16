<script setup lang="ts">
  defineProps({
    todos: Array,
  });

  const emit = defineEmits(['delete']);

  const handleDeleteTodo = (id) => {
    emit('delete', id);
    console.log(id);
  };
</script>

<template>
  <slot></slot>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <span>{{ todo.title }}</span>

      <button @click="handleDeleteTodo(todo.id)">Удалить</button>
    </li>
  </ul>
</template>

<style scoped></style>
