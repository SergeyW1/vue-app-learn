<script setup>
  import Layout from './components/Layout.vue';
  import Card from './components/Card.vue';
  import { ref } from 'vue';
  import HealthSvg from './components/icons/HealthSvg.vue';
  import Score from './components/Score.vue';

  const currScore = ref(0);

  const cards = ref([
    { id: 6, wordEn: 'dust-coat', wordRus: 'караван верблюдов', flipped: false, status: 'new' },
    { id: 7, wordEn: 'carom', wordRus: 'караван верблюдов', flipped: true, status: 'new' },
    { id: 8, wordEn: 'car', wordRus: 'автомобиль', flipped: true, status: 'done' },
    { id: 9, wordEn: 'car', wordRus: 'велосипед', flipped: true, status: 'incomplete' },
  ]);

  const handleTurn = (id) => {
    cards.value = cards.value.map((card) => {
      if (card.id === id) {
        return { ...card, flipped: true };
      }

      return card;
    });
  };

  const handleClose = (id) => {
    cards.value = cards.value.map((card) => {
      if (card.id === id) {
        return { ...card, flipped: false };
      }

      return card;
    });
  };
</script>

<template>
  <main class="container">
    <Layout>
      <Score :score="currScore" />
      <HealthSvg />
    </Layout>

    <div class="cards">
      <Card
        v-for="card in cards"
        :key="card.id"
        v-bind="card"
        @turn="handleTurn"
        @close="handleClose"
      />
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
