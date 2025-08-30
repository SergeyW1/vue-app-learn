<script setup>
  import { ref } from 'vue';
  import TodoList from './components/TodoList.vue';
  import TodoInput from './components/TodoInput.vue';

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
   *    - Отдельный компонент `TodoInput.vue`.
   *    - Используй `defineModel` + `v-model` для инпута.
   *    - По Enter или кнопке эмить событие `submit`.
   *
   * 4) (необязательно) Добавь поиск по названию задачи.
   */
  const todos = ref([
    { id: 100, title: 'Выучить Javascript', completed: true },
    { id: 101, title: 'Выучить Английский', completed: false },
    { id: 102, title: 'Выучить Vue', completed: true },
    { id: 103, title: 'Выучить все на свете', completed: false },
    { id: 104, title: 'Завести', completed: true },
  ]);

  const handleDelete = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  const newTodo = ref('');

  const newTodoSubmit = () => {
    if (!newTodo.value) {
      return;
    }
    todos.value = [...todos.value, { id: Date.now(), title: newTodo.value, completed: false }];

    newTodo.value = '';
  };
</script>

<template>
  <TodoInput v-model="newTodo" />

  <button @click="newTodoSubmit">Добавить</button>

  <TodoList :todos="todos" @delete="handleDelete" />
</template>
