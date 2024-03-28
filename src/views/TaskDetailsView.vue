<script setup></script>

<template>
  <h2 class="view-header task-details">Детальная страница задачи</h2>
  <form class="task-details__form">
    <ElInput />
    <ElCheckbox />
    <ElCheckbox />
    <div>
      <ElButton />
      <ElButton />
    </div>
  </form>
</template>

<style lang="scss" scoped>
.task-details{
  &__form{
    margin-top: 28px;
  }
}
</style>
