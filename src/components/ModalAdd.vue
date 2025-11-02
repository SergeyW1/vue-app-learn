<script setup>
  const open = defineModel({ default: false });

  const addNewTodo = () => {
    open.value = false;
  };
</script>

<template>
  <div v-if="open" class="modal">
    <form class="modal__content">
      <slot></slot>

      <button @click="addNewTodo">Добавить</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
  /* затемнение фона */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* само окно */
  .modal__content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    min-width: 300px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.25s ease;
  }

  /* кнопка закрытия */
  .modal__close {
    margin-top: 15px;
    background: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 6px 12px;
    cursor: pointer;
  }
  .modal__close:hover {
    background: #eee;
  }
</style>
