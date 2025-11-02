<script setup>
  import Btn from './Btn.vue';

  const props = defineProps({
    item: Object,
  });

  const emit = defineEmits(['delete']);

  const onDelete = () => {
    emit('delete', props.item.id);
  };
</script>

<template>
  <li>
    <span>{{ item.title }}</span>

    <Btn title="Удалить" @click="onDelete" />
  </li>
</template>

<style scoped lang="scss"></style>
