<script setup>
  import { computed, ref } from 'vue';
  import InputText from './components/InputText.vue';
  import Btn from './components/Btn.vue';
  import TodoList from './components/TodoList.vue';

  // const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

  const todos = ref([
    { id: 1, title: 'Первая задача', completed: false },
    { id: 2, title: 'Вторая задача', completed: true },
    { id: 3, title: 'Третья задача', completed: false },
    { id: 4, title: 'Четвертая задача', completed: true },
  ]);

  const newTodo = ref('');
  const filterTodo = ref('');

  const addNewTodo = () => {
    if (!newTodo.value) {
      return;
    }
    todos.value = [...todos.value, { id: Date.now(), title: newTodo.value }];
    newTodo.value = '';
  };

  const handleDelete = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  // Вычисляемый список задач с учётом поиска
  const filteredTodos = computed(() => {
    const search = String(filterTodo.value).trim().toLowerCase();

    // Если поиска нет — показываем все
    if (!search) {
      return todos.value;
    }

    // Иначе фильтруем по вхождению текста
    return todos.value.filter((todo) => todo.title.toLowerCase().includes(search));
  });
</script>

<template>
  <h2>Список задач</h2>

  <!-- Поле для поиска -->
  <InputText v-model="filterTodo" title="Найти задачу" />

  <!-- Поле и кнопка для добавления новой задачи -->
  <div>
    <InputText v-model="newTodo" title="Введите новую задачу" />
    <Btn title="Добавить" @click="addNewTodo" />
  </div>

  <!-- Список задач -->
  <!-- TodoList получает отфильтрованные задачи -->
  <!-- и эмитит событие @delete для удаления -->
  <TodoList :items="filteredTodos" @delete="handleDelete" />

  <!-- Сообщение, если задач нет -->
  <div v-if="!filteredTodos.length">Нет задач</div>
</template>
