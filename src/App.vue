<script setup>
  import { ref } from 'vue';
  import TodoList from './components/TodoList.vue';

  /**
   * Задача:
   *
   * Создай новый компонент TodoList.vue.
   *
   * Передай в него список задач (todos) через пропсы.
   *
   * Внутри TodoList.vue отобрази этот список в виде списка с элементами, используя v-for.
   *
   * Каждый элемент списка должен показывать текст задачи.
   */
  const todos = ref([
    { id: 100, title: 'Выучить Javascript' },
    { id: 101, title: 'Выучить Английский' },
    { id: 102, title: 'Выучить Vue' },
    { id: 103, title: 'Выучить все на свете' },
    { id: 104, title: 'Завести' },
  ]);

  const handleDeleteTodo = (id) => {
    todos.value = todos.value.filter((item) => item.id !== id);
  };
</script>

<template>
  <TodoList :todos="todos" @delete="handleDeleteTodo">
    <h2>Список</h2>
  </TodoList>
</template>
