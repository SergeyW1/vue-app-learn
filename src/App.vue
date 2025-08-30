<script setup>
  import { computed, ref } from 'vue';
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
  // список задач (реактивный, т.е. Vue будет следить за изменениями)
  const todos = ref([
    { id: 100, title: 'Выучить Javascript', completed: true },
    { id: 101, title: 'Выучить Английский', completed: false },
    { id: 102, title: 'Выучить Vue', completed: true },
    { id: 103, title: 'Выучить все на свете', completed: false },
    { id: 104, title: 'Завести', completed: true },
  ]);

  // удаление задачи по id → просто оставляем все, кроме нужного
  const handleDelete = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  // реактивное поле для новой задачи
  const newTodo = ref('');

  // реактивное поле для строки поиска
  const searchTodo = ref('');

  // добавление новой задачи
  const newTodoSubmit = () => {
    if (!newTodo.value) return; // если строка пустая — выходим

    todos.value = [...todos.value, { id: Date.now(), title: newTodo.value, completed: false }];

    newTodo.value = ''; // очищаем поле ввода
  };

  // 🔥 computed: "фильтрованный список задач"
  const filteredTodos = computed(() => {
    // берём строку поиска, приводим к нижнему регистру
    const search = String(searchTodo.value).trim().toLowerCase();

    // если строка пустая → возвращаем все задачи
    if (!search) return todos.value;

    // иначе фильтруем: оставляем только те, где заголовок содержит строку поиска
    return todos.value.filter((todo) => todo.title.toLowerCase().includes(search));
  });
</script>

<template>
  <div>
    <!-- Поле поиска: двусторонняя связь с searchTodo -->
    <TodoInput v-model="searchTodo" title="Поиск по задачам" />
  </div>

  <!-- Поле для новой задачи -->
  <TodoInput v-model="newTodo" title="Введите новую задачу" />
  <button @click="newTodoSubmit">Добавить</button>

  <!-- Список: отдаём уже отфильтрованные задачи -->
  <TodoList :todos="filteredTodos" @delete="handleDelete" />
</template>
