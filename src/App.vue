<script setup>
  import Stat from './components/Stat.vue';
  import CitySelect from './components/CitySelect.vue';
  import { computed, ref } from 'vue';

  const savedCity = ref('Moscow');

  const data = ref({
    humidity: 90,
  });

  const dataModified = computed((prev) => {
    console.log(prev);
    return {
      label: 'Влажность',
      stat: data.value.humidity + '%',
    };
  });

  async function getCity(city) {
    savedCity.value = city;
    data.value.humidity = 20;
  }
</script>

<template>
  <main class="main">
    <div id="city">{{ savedCity }}</div>
    <Stat v-bind="dataModified" />
    <Stat label="Осадки" stat="0%" />
    <CitySelect @select-city="getCity" />
  </main>
</template>

<style scoped>
  .main {
    background: var(--color-bg-main);
    padding: 60px 50px;
    border-radius: 25px;
  }
</style>
