<script setup>
  import { ref } from 'vue';
  import TodoList from './components/TodoList.vue';
  import AddTodoInput from './components/AddTodoInput.vue';

  /**
   * ЗАДАНИЕ:
   *
   * 1) Создай компонент `TodoList.vue`.
   *    - Принимает список `todos` через пропсы.
   *    - Отображает их с помощью `v-for`.
   *    - Добавь кнопку "Удалить" → эмить событие `remove` с id задачи.
   *
   * 2) В родителе (`App.vue`):
   *    - Реализуй метод удаления (через filter).
   *
   * 3) Реализуй добавление задачи:
   *    - Отдельный компонент `AddTodoInput.vue`.
   *    - Используй `defineModel` + `v-model` для инпута.
   *    - По Enter или кнопке эмить событие `submit`.
   *
   * 4) (необязательно) Добавь поиск по названию задачи.
   */
  const todos = ref([
    { id: 100, title: 'Выучить Javascript' },
    { id: 101, title: 'Выучить Английский' },
    { id: 102, title: 'Выучить Vue' },
    { id: 103, title: 'Выучить все на свете' },
    { id: 104, title: 'Завести' },
  ]);

  const newTodo = ref('');

  const handleAddTodo = () => {
    if (!newTodo.value) {
      return;
    }

    todos.value = [...todos.value, { id: Date.now(), title: newTodo.value }];

    newTodo.value = '';
  };

  const handleDeleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };
</script>

<template>
  <AddTodoInput v-model="newTodo" />

  <button @click="handleAddTodo">Добавить</button>

  <TodoList :todos="todos" @delete="handleDeleteTodo">
    <h3>Список дел</h3>
  </TodoList>
</template>
