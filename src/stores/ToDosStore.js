import { todosMock } from '@/mocks/todos.js';
import { defineStore } from 'pinia';


export const useToDosStore = defineStore('toDosStore', {
  state: () => ({
    toDos: [
      ...todosMock,
    ],
    
    activeFilter: {
      isDone: false,
      isFavorite: false,
    },

    activeModal: {
      deleteModal: false,
      createModal: false,
      task: {},
    },
  }),

  getters: {
    filteredToDos() {
      let filteredToDos = this.toDos;
      if(this.activeFilter.isDone){
        filteredToDos = filteredToDos.filter(el => el.isDone);
      }

      if(this.activeFilter.isFavorite){
        filteredToDos = filteredToDos.filter(el => el.isFavorite);
      }
      
      return filteredToDos;
    },
  },

  actions: {
    // Изменяем state, как это делали бы во Vue 2 - явно перезаписываем значение, а не мутируем его.
    toggleIsFavorite(id) {
      const toDoIndex = this.toDos.findIndex(el => el.id === id);
      const toDoClone = { ...this.toDos[toDoIndex] };
      toDoClone.isFavorite = !toDoClone.isFavorite;
      const cloneToDos = [ ...this.toDos ];
      cloneToDos[toDoIndex] = toDoClone;
      this.toDos = cloneToDos;
    },
    
    toggleIsDone(id) {
      const toDo = this.toDos.find(el => el.id === id);
      toDo.isDone = !toDo.isDone;
    },

    openModalDelete(task) {
      this.activeModal.task = task;
      this.activeModal.deleteModal = true;
    },

    deleteToDo() {
      this.toDos = this.toDos.filter(el => this.activeModal.task.id !== el.id);
      this.activeModal.deleteModal = false;
      this.activeModal.task = {};
    },

    createToDo() {
      this.activeModal.task.isDone = false;
      this.activeModal.task.id = this.toDos.length + 1;
      this.toDos.push(this.activeModal.task);
      this.activeModal.task = {};
      this.activeModal.createModal = false;
    },
  },
});
