<script setup>
  import { onMounted, ref } from 'vue';
  import { api } from './components/api.js';

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  /**
   * ЗАДАНИЕ:
   *
   * Реализовать запрос через жизненный цикл по URL
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
   */
  const todos = ref(null);
  const isLoading = ref(false);

  const URL_GET = '/todos?_limit=13';

  const handleGetTodo = async () => {
    try {
      isLoading.value = true;

      await delay(2000);

      const response = await api.get(URL_GET);

      todos.value = response.data;
    } catch (error) {
      console.log('error', error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => {
    await handleGetTodo();

    console.log('hello');
  });
</script>

<template>
  <button @click="handleGetTodo">{{ isLoading ? 'Идет Загрузка' : 'Обновить' }}</button>

  <div v-if="isLoading">Идет загрузка</div>

  <ul v-else style="width: 300px; height: 300px">
    <li v-for="todo in todos" :key="todo.id">
      <span>{{ todo.title }}</span>
    </li>
  </ul>
</template>
