<script setup lang='ts'>
import { type ToDo } from '@/helpers/toDo';
import {useToDosStore} from '@/stores/ToDosStore';
import type { PropType } from 'vue';

const toDosStore = useToDosStore();

defineProps({
  task: {
    type: Object as PropType<ToDo>,
    required: true,
    validator({ id, title, isDone, isFavorite }: ToDo) {
      return id !== undefined
        && typeof title === 'string'
        && typeof isDone === 'boolean'
        && typeof isFavorite === 'boolean';
    },
  },
});

const emit = defineEmits<{
  clickDelete: [task: ToDo]
}>();
</script>

<template>
  <li
    class="tasks-view__item task"
    :class="{'task--done': task.isDone, 'task--favorite': task.isFavorite}"
  >
    <div class="task__line1">
      <h3 class="task__name">{{ task.title }}</h3>
      <ElButton size="large" class="task__btn-favorite" @click.stop="toDosStore.toggleIsFavorite(task.id)" />
    </div>
    <div class="task__line2">
      <RouterLink 
        :to="`/taskDetails/${task.id}`" 
        class="task__router-link" 
        @click.stop
      >
        Редактировать
      </RouterLink>
      <el-button
        type="danger"
        class="task__btn-delete"
        @click.stop="emit('clickDelete', task)"
      >
        Удалить
      </el-button>
    </div>
  </li>
</template>

<style lang="scss" scoped>

.task{
  display: flex;
  flex-direction: column;
  min-height: 118px;
  padding: 17px;
  border: 1px solid rgb(170 170 170);

  &:hover{
    cursor: pointer;
    border: 1px solid rgb(0 0 0);
    box-shadow: 0 2px 8px 0 rgba(99 99 99 / 0.2);
    transition: 0.15s ease;
  }

  &__line1,
  &__line2{
  display: flex;
  justify-content: space-between;
  }

  &__line1{
  height: 38px;
  }

  &__name{
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 22px;
  }

  &__btn-favorite{
    width: 38px;
    height: 38px;
    padding: 0;
    font-size: 0;
    background-image: url('../assets/icons/isfavoriteFalse.svg');
    background-position: center;
    background-repeat: no-repeat;
  }

  &__line2{
  height: 32px;
  margin-top: 12px;
  }

  &__router-link{
    height: fit-content;
    font-size: 16px;
    line-height: 18.4px;
    text-decoration: none;
    align-self: center;
    color: black;
  }

  &__router-link:hover{
  border-bottom: 1px solid rgb(0 0 0);
  transition: 0.15s ease;
  }

  &__router-link:visited{
    color: black;
  }
  
  &--done {
    border-color: rgb(144 238 144);

    &:hover{
      border-color: rgb(144 238 144);
    }

    .task {
      &__name{
        color: rgb(144 238 144);
      }

      &__router-link {
        &:hover{
          border-color: rgb(170 170 170); 
        }

        &:visited{
          color: rgb(170 170 170);
        }
      }

      &__btn-delete{
        opacity: 0.8;
      }
    }

  }

  &--favorite {
    .task__btn-favorite{
      background-image: url('../assets/icons/isfavoriteTrue.svg');
    }
  }
}

</style>
