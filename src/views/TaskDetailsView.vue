<script setup lang='ts'>
import { type ToDo, toDoTemplate } from '@/helpers/toDo';
import { useToDosStore } from '@/stores/ToDosStore';
import { ElNotification } from 'element-plus';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const toDosStore = useToDosStore();

const isTitleEmpty = ref(false);
const toDo = ref<ToDo>({ ...toDoTemplate });

const saveAndRedirect = (): void => {
  if (!toDo.value.title) {
    isTitleEmpty.value = true;
    return;
  }
  toDosStore.saveTaskChanges(toDo.value);
  router.replace({ path: '/tasks' });
  ElNotification({
    title: 'Задача успешно изменена',
    type: 'success',
  });
};

const deleteAndRedirect = (): void => {
  toDosStore.deleteToDo(toDo.value.id);
  router.replace({ path: '/tasks' });
  ElNotification({
    title: 'Задача успешно удалена',
    type: 'success',
  });
};

const findToDo = (): void => {
  const task = toDosStore.toDos.find(el => el.id ===  Number(route.params.id));
  if (task) {
    toDo.value = {...task};
    return;
  }
  router.replace({path: '/tasks'});
};

findToDo();
</script>

<template>
  <h2 class="view-header task-details">Детальная страница задачи</h2>
  <form class="task-details__form">
    <div>
      <p v-if="isTitleEmpty" class="task-details__title-error">
        Пожалуйста, введите название!
      </p>
      <el-input placeholder="Введите название задачи" v-model.trim="toDo.title" />
    </div>
    <ElCheckbox
      size="default"
      label="Избранное"
      border
      class="task-details__checkbox"
      v-model="toDo.isFavorite"
    />
    <ElCheckbox
      size="default"
      label="Выполнено"
      border
      class="task-details__checkbox"
      v-model="toDo.isDone"
    />
    <div>
      <el-button
        type="primary"
        class="task-details__btn btn__task-save"
        @click="saveAndRedirect"
      >
        Сохранить
      </el-button>
      <el-button
        type="danger"
        class="task-details__btn btn__task-delete"
        @click="deleteAndRedirect"
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

  &__title-error{
    margin: 0 0 8px;
    color: red;
  }
}
</style>
