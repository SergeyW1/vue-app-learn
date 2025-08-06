<script setup>
  import FancyCard from './components/FancyCard.vue';
</script>

<template>
  <FancyCard title="Task Info" border-color="green">
    <p>This task is high priority and must be done today.</p>

    <template #footer>
      <button>Mark as done</button>
    </template>
  </FancyCard>

  <FancyCard title="Note" border-color="orange">
    <p>Remember to call the client tomorrow morning.</p>
  </FancyCard>
</template>
