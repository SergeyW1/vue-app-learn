<script setup>
  import Stat from './components/Stat.vue';
  import CitySelect from './components/CitySelect.vue';
  import { computed, ref } from 'vue';

  const API_ENDPOINT = 'https://api.weatherapi.com/v1';

  const data = ref({
    humidity: 90,
    rain: 0,
    wind: 3,
  });

  const dataModified = computed(() => {
    return [
      {
        label: 'Влажность',
        stat: data.value.humidity + '%',
      },
      {
        label: 'Осадки ',
        stat: data.value.rain + '%',
      },
      {
        label: 'Ветер',
        stat: data.value.wind + 'м/ч',
      },
    ];
  });

  async function getCity(city) {
    const params = new URLSearchParams({
      q: city,
      lang: 'ru',
      key: '49099db78ead45cbbe1153336253108',
      days: 3,
    });

    const res = await fetch(`${API_ENDPOINT}/forecast.json?${params.toString}`);

    console.log('res', res.json());
  }
</script>

<template>
  <main class="main">
    <div id="city">{{ savedCity }}</div>
    <Stat v-for="item in dataModified" v-bind="item" :key="item.label" />
    <!--    <Stat v-bind="dataModified" />-->
    <!--    <Stat label="Осадки" stat="0%" />-->
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
