<script setup lang='ts'>
import {useToDosStore} from '@/stores/ToDosStore';
import { ref } from 'vue';

const toDosStore = useToDosStore();

const isShowDeleteModal = ref(false);
const toDo = ref({});


const openDeleteModal = (task) => {
  isShowDeleteModal.value = true;
  toDo.value = task;
};

const deleteToDo = () => {
  toDosStore.deleteToDo(toDo.value.id);
  isShowDeleteModal.value = !isShowDeleteModal.value;
  ElNotification({
    title: 'Задача успешно удалена',
    type: 'success',
  });
};

defineExpose({
  openDeleteModal,
});

</script>

<template>
  <el-dialog
    v-model="isShowDeleteModal"
    width="500"
  >
    <template #header> 
      <p class="el-dialog__text">Точно удалить задачу "{{ toDo.title }}" ?</p>
    </template>
    <template #footer>
      <div class="el-dialog__btns">
        <el-button class="el-dialog__btns-delete" type="danger" @click="deleteToDo">
          Удалить
        </el-button>
        <el-button class="el-dialog__btns-delete" @click="isShowDeleteModal = !isShowDeleteModal">
          Отмена
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
