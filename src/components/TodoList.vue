<script setup>
  defineProps({
    todos: Array,
    completed: Boolean,
  });

  const emit = defineEmits(['delete']);

  const handleDelete = (id) => {
    emit('delete', id);
  };
</script>

<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input v-model="todo.completed" type="checkbox" />

      <span :class="{ completed: todo.completed }">{{ todo.title }}</span>

      <button @click="handleDelete(todo.id)">Удалить</button>
    </li>
  </ul>
</template>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
