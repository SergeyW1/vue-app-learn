<script setup>
  import axios from 'axios';
  import { ref } from 'vue';

  const api = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

  const todos = ref(null);
  const isLoading = ref(false);
  const isError = ref(false);

  async function getTodos() {
    try {
      // isLoading.value = true;
      // isError.value = false;
      const response = await api.get('/todos', {
        params: {
          _limit: 5,
        },
      });

      todos.value = response.data;
    } catch (error) {
      console.log('error', error);
      // isError.value = true;
    } finally {
      // isLoading.value = false;
    }
  }
</script>

<template>
  <button :disabled="isLoading" @click="getTodos">
    {{ isLoading ? 'Загрузка' : 'Обновить' }}
  </button>

  <div v-if="isLoading">Загрузка</div>

  <div v-else-if="isError">Ошибка</div>

  <ul v-else>
    <li v-for="todo in todos" :key="todo.id">
      <span>{{ todo.title }}</span>
    </li>
  </ul>
</template>

<style scoped></style>
