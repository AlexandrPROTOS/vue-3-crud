<script setup>
import TaskItem from '@/components/TaskItem.vue';
import {useToDosStore} from '@/stores/ToDosStore';

const toDosStore = useToDosStore();


</script>

<template>
  <h2 class="view-header">CRUD задачи</h2>

  <div class="tasks-view">
    <div class="tasks-view__control">
      <div class="tasks-view__control-checkboxes">
        <ElCheckbox 
          size="default"
          label="Выполнено"
          border
          class="tasks-view__checkbox"
          v-model="toDosStore.activeFilter.isDone"
        />
        <ElCheckbox
          size="default"
          label="Избранное"
          border
          class="tasks-view__checkbox"
          v-model="toDosStore.activeFilter.isFavorite"
        />
      </div>
      
      <el-button
        type="primary"
        size="default"
        class="tasks-view__btn btn__task-edit"
        @click="toDosStore.activeModal.createModal = true"
      >
        Создать задачу
      </el-button>
    </div>

    <ul class="tasks-view__list">
      <TaskItem
        v-for="task in toDosStore.filteredToDos"
        :key="task.id"
        :task="task"
        @click="toDosStore.toggleIsDone(task.id)"
      />
    </ul>
  </div>

  <el-dialog
    v-model="toDosStore.activeModal.deleteModal"
    center
    width="500"
  >
    <template #header> 
      <p>Точно удалить задачу "{{ toDosStore.activeModal.task.title }}" ?</p>
    </template>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="danger" @click="toDosStore.deleteToDo()">
          Удалить
        </el-button>
      </div>
    </template>
  </el-dialog>

  <el-dialog
    v-model="toDosStore.activeModal.createModal"
    title="Создать новую задачу"
    width="500"
  >
    <template #footer>
      <div class="dialog-footer">
        <form>
          <ElInput placeholder="Введите название задачи" v-model="toDosStore.activeModal.task.title" />
          <ElCheckbox
            size="default"
            label="Избранное"
            border
            class="tasks-view__checkbox"
            @click="toDosStore.activeModal.task.isFavorite = !toDosStore.activeModal.task.isFavorite"
          />
        </form>
        <el-button type="primary" @click="toDosStore.createToDo()">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.tasks-view{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin-top: 28px;
  margin-right: auto;
  margin-left: auto;
  gap: 20px;


  &__btn{
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
