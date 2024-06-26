<script setup lang='ts'>
import TaskItem from '@/components/TaskItem.vue';
import ToDoCreateModal from '@/components/ToDoCreateModal.vue'; 
import ToDoDeleteModal from '@/components/ToDoDeleteModal.vue';
import { type ToDo } from '@/helpers/toDo';
import {useToDosStore} from '@/stores/ToDosStore';
import { ref } from 'vue';

const toDosStore = useToDosStore();

const deleteModal = ref<typeof ToDoDeleteModal>();
const createModal = ref<typeof ToDoCreateModal>();

const handleClickDelete = (task: ToDo): void => {
  deleteModal.value?.openDeleteModal(task);
};

const handleClickCreate = (): void => {
  createModal.value?.openCreateModal();
};
</script>

<template>
  <h1 class="view-header">CRUD задачи</h1>

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
        @click="handleClickCreate"
      >
        Создать задачу
      </el-button>
    </div>

    <ul class="tasks-view__list">
      <TaskItem
        v-for="item in toDosStore.filteredToDos"
        :key="item.id"
        :task="item"
        @click="toDosStore.toggleIsDone(item.id)"
        @clickDelete="handleClickDelete"
      />
    </ul>
  </div>

  <ToDoDeleteModal ref="deleteModal" />
  <ToDoCreateModal ref="createModal" />
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
    z-index: 0;
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

@media (width < 487px){
  .tasks-view{
    &__control{
      flex-direction: column;
      gap: 10px;
    }

    &__control-checkboxes{
      justify-content: center;
    }

    &__btn{
      align-self: center;
      width: 100%;
      margin-left: 0;
    }
  }
}

@media (width < 341px){
  .tasks-view{
    &__control{
      flex-direction: column;
      gap: 10px;
    }

    &__control-checkboxes{
      flex-direction: column;
      align-items: center;
    }

    &__checkbox{
      width: 50%;
    }

    &__btn{
      align-self: center;
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
