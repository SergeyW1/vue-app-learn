<script setup>
  import { computed, ref, watch } from 'vue';

  const tasks = ref([
    { id: 1, title: 'Feed the cat', done: false },
    { id: 2, title: 'Read Vue docs', done: true },
    { id: 3, title: 'Clean the desk', done: false },
  ]);

  const searchQuery = ref('');

  watch(searchQuery, (newVal) => {
    console.log('newVal', newVal);
  });

  const filteredTasks = computed(() => {
    const search = searchQuery.value.trim().toLowerCase();

    if (!search) {
      return tasks.value;
    }

    return tasks.value.filter((task) => task.title.toLowerCase().includes(search));
  });
</script>

<template>
  <input v-model="searchQuery" placeholder="поиск задачи" />

  <ul>
    <li v-for="task in filteredTasks" :key="task.id">
      <span>{{ task.title }}</span>
    </li>
  </ul>
</template>

<style lang="scss">
  //.button-switch {
  //  background-color: darkseagreen;
  //  color: white;
  //  padding: 5px 10px;
  //  cursor: pointer;
  //  border: none;
  //  border-radius: 5px;
  //}
  //
  //.is-visible {
  //  background-color: deepskyblue;
  //}
</style>
