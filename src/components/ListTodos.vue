<script setup>
  import ItemTodo from './ItemTodo.vue';

  defineProps({
    items: Array,
  });

  const emit = defineEmits(['delete']);

  const onDelete = (id) => {
    emit('delete', id);
  };
</script>

<template>
  <ul>
    <ItemTodo v-for="item in items" :key="item.id" :item="item" @delete="onDelete" />
  </ul>
</template>

<style scoped lang="scss"></style>
