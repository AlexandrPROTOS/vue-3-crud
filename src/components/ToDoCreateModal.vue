<script setup lang='ts'>
import { type ToDo, toDoTemplate } from '@/helpers/toDo';
import { useToDosStore } from '@/stores/ToDosStore';
import { ElNotification } from 'element-plus';
import { ref } from 'vue';

const toDosStore = useToDosStore();

const isShowCreateModal = ref(false);

const toDo = ref<ToDo>({ ...toDoTemplate });

const openCreateModal = (): void => {
  isShowCreateModal.value = true;
  toDo.value = { ...toDoTemplate };
};

const isTitleEmpty = ref(false);

const createToDo = (): void => {
  if (!toDo.value.title) {
    isTitleEmpty.value = true;
    return;
  }
  toDo.value.id = Date.now();
  toDosStore.createToDo(toDo.value);
  isShowCreateModal.value = false;
  ElNotification({
    title: 'Задача успешно создана',
    type: 'success',
  });
};

defineExpose({
  openCreateModal,
});
</script>

<template>
  <el-dialog
    v-model="isShowCreateModal"
    title="Создать новую задачу"
    width="500"
    @closed="() => { isTitleEmpty = false; }"
  >
    <template #footer>
      <form>
        <p v-if="isTitleEmpty" class="el-dialog__error">
          Пожалуйста, введите название!
        </p>
        <ElInput
          placeholder="Введите название задачи"
          v-model="toDo.title"
          required
          type="text"
        />
        <ElCheckbox
          size="default"
          label="Избранное"
          border
          class="el-dialog__favorite"
          v-model="toDo.isFavorite"
        />
      </form>
      <div class="el-dialog__btns">
        <el-button type="primary" @click="createToDo">
          Создать
        </el-button>
        <el-button @click="isShowCreateModal = !isShowCreateModal">
          Отмена
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
