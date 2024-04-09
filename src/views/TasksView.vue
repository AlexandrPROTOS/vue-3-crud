<script setup>
import TaskItem from '@/components/TaskItem.vue';
</script>

<template>
  <h2 class="view-header tasks-view">CRUD задачи</h2>

  <div class="tasks-view__box">
    <el-button
      type="primary"
      size="default"
      class="tasks-view__btn"
    >
      Добавить задачу
    </el-button>

    <div class="tasks-view__control">
      <div class="tasks-view__control-checkboxes">
        <ElCheckbox 
          size="default"
          label="Выполнено"
          border
          class="tasks-view__checkbox"
        />
        <ElCheckbox
          size="default"
          label="Избранное"
          border
          class="tasks-view__checkbox"
        />
      </div>
      
      <el-button
        type="primary"
        size="default"
        class="tasks-view__btn btn__task-edit"
      >
        Добавить задачу
      </el-button>
    </div>

    <ul class="tasks-view__list">
      <TaskItem v-for="item in [1, 2, 3]" :key="item" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>

.tasks-view{
  &__box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    margin-top: 28px;
    margin-right: auto;
    margin-left: auto;
    gap: 20px;
  }

  &__btn{
    margin-right: auto;
    margin-left: auto;
  }

  &__control{
    display: flex;
    flex-direction: row;
    padding: 11px;
    border: 1px solid rgb(170 170 170);
    box-shadow: 0 2px 8px rgb(100 100 111 / 0.1);
  }

  &__control-checkboxes{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  &__checkbox{
    margin: 0;
  }

  &__list{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 20px;
    flex-flow: column wrap;
  }
}

.btn__task-edit{
  margin-right: 0;
}

</style>
