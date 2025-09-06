<script setup>
  import { ref } from 'vue';

  const todos = ref(null);
  const isLoading = ref(false);
  const isError = ref(false);

  // 3) Функция задержки: возвращает Promise, который выполнится через ms миллисекунд.
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // 4) Асинхронная функция запроса данных.
  //    async позволяет использовать await (ждать результаты промисов по шагам).
  const fetchData = async () => {
    // try / catch / finally — стандартный шаблон работы с асинхронным кодом:
    // try     — основной сценарий (что мы хотим сделать)
    // catch   — обработка ошибок (если что-то сломалось в try)
    // finally — завершающие действия, которые должны выполниться в любом случае
    try {
      // - сбрасываем ошибку, включаем индикатор загрузки
      isError.value = false;
      isLoading.value = true;

      // Делаем искусственную паузу 2 секунды.
      // await "приостанавливает" выполнение функции до тех пор, пока delay не завершится.
      await delay(2000);

      // Делаем HTTP-запрос, await "ждёт", пока сервер ответит (вернёт Response).
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=13');

      // Превращаем ответ сервера в JS-объекты (массив задач).
      // response.json() тоже возвращает Promise → поэтому снова await.
      todos.value = await response.json();
    } catch (error) {
      // Сюда попадём, если что-то упало в блоке try (например, нет интернета).
      console.log('error:', error);
      isError.value = true; // Включаем флаг ошибки — интерфейс покажет сообщение.
    } finally {
      // Этот блок выполнится ВСЕГДА: и при успехе, и при ошибке.
      // Здесь выключаем индикатор загрузки.
      isLoading.value = false;
    }
  };
</script>

<template>
  <div>
    <h3>Данные с сервера:</h3>

    <!-- Кнопка запуска запроса.
         :disabled="isLoading" — чтобы не нажимали повторно, пока идёт запрос. -->
    <button :disabled="isLoading" @click="fetchData">
      {{ isLoading ? 'Загружаю…' : 'Получить данные' }}
    </button>

    <!-- Логика показа вьюшек по состояниям:
         1) Если грузим — показываем "Loading".
         2) Иначе, если ошибка — показываем "Error".
         3) Иначе, если есть данные (массив не пуст) — рисуем список.
         4) Иначе — пустое состояние (ещё ничего не загружено). -->
    <div v-if="isLoading">Is Loading...</div>

    <div v-else-if="isError">Is Error...</div>

    <ul v-else-if="Array.isArray(todos) && todos.length">
      <li v-for="todo in todos" :key="todo.id">
        <span>{{ todo.title }}</span>
      </li>
    </ul>

    <div v-else>Пока ничего нет — нажми кнопку выше.</div>
  </div>
</template>
