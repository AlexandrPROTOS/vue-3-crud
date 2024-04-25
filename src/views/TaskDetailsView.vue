<script setup></script>

<template>
  <h2 class="view-header task-details">Детальная страница задачи</h2>
  <form class="task-details__form">
    <ElInput placeholder="Введите название задачи" />
    <ElCheckbox
      size="default"
      label="Избранное"
      border
      class="task-details__checkbox"
    />
    <ElCheckbox
      size="default"
      label="Выполнено"
      border
      class="task-details__checkbox"
    />
    <div>
      <el-button
        type="primary"
        class="task-details__btn btn__task-save"
      >
        Сохранить
      </el-button>
      <el-button
        type="danger"
        class="task-details__btn btn__task-delete"
      >
        Удалить
      </el-button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.task-details{
  &__form{
    display: flex;
    flex-direction: column;
    margin-top: 28px;
    gap: 16px;
  }

  &__checkbox {
    margin: 0;
  }
}
</style>
