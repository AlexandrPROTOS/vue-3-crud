<script setup>
import {useToDosStore} from '@/stores/ToDosStore';

const toDosStore = useToDosStore();
</script>

<template>
  <h2 class="view-header task-details">Детальная страница задачи</h2>
  <form class="task-details__form">
    <el-input placeholder="Введите название задачи" v-model="toDosStore.activeModal.task.title" />
    <ElCheckbox
      size="default"
      label="Избранное"
      border
      class="task-details__checkbox"
      v-model="toDosStore.activeModal.task.isFavorite"
    />
    <ElCheckbox
      size="default"
      label="Выполнено"
      border
      class="task-details__checkbox"
      v-model="toDosStore.activeModal.task.isDone"
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
        @click="toDosStore.deleteToDo()"
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
