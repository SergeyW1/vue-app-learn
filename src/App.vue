<script setup>
  import Layout from './components/Layout.vue';
  import Card from './components/Card.vue';
  import { ref } from 'vue';
  import HealthSvg from './components/icons/HealthSvg.vue';
  import Score from './components/Score.vue';

  const currScore = ref(0);

  const cards = ref([
    { id: 6, word: 'dust-coat', flipped: false, status: 'new' },
    { id: 7, word: 'караван верблюдов', flipped: false, status: 'new' },
    { id: 8, word: 'автомобиль', flipped: true, status: 'done' },
  ]);
</script>

<template>
  <main class="container">
    <Layout>
      <Score :score="currScore" />
      <HealthSvg />
    </Layout>

    <div class="cards">
      <Card v-for="card in cards" :key="card.id" v-bind="card" />
    </div>
  </main>
</template>

<style scoped>
  .container {
    padding: 30px 60px;
  }

  .cards {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 58px;
  }
</style>
