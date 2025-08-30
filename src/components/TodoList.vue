<script setup>
  defineProps({
    todos: Array,
  });

  const emit = defineEmits(['delete']);

  const handleDelete = (id) => {
    emit('delete', id);
  };
</script>

<template>
  <div v-if="!todos.length">Задача не найдена</div>

  <ul v-else>
    <li v-for="todo in todos" :key="todo.id">
      <input v-model="todo.completed" type="checkbox" />

      <span :class="{ isComplete: todo.completed }">{{ todo.title }}</span>

      <button @click="handleDelete(todo.id)">Удалить</button>
    </li>
  </ul>
</template>

<style scoped>
  .isComplete {
    text-decoration: line-through;
  }
</style>
