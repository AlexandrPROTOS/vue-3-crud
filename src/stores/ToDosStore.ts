import { type ToDo } from '@/helpers/toDo';
import { todosMock } from '@/mocks/todos';
import { defineStore } from 'pinia';

export const useToDosStore = defineStore('toDosStore', {
  state: () => ({
    toDos: [...todosMock],
    activeFilter: {
      isDone: false,
      isFavorite: false,
    },
  }),

  actions: {
    // Изменяем state, как это делали бы во Vue 2 - явно перезаписываем значение, а не мутируем его.
    toggleIsFavorite(id: ToDo['id']) {
      const toDoIndex = this.toDos.findIndex((el) => el.id === id);
      const toDoClone = { ...this.toDos[toDoIndex] };
      toDoClone.isFavorite = !toDoClone.isFavorite;
      const cloneToDos = [...this.toDos];
      cloneToDos[toDoIndex] = toDoClone;
      this.toDos = cloneToDos;
    },
    toggleIsDone(id: ToDo['id']) {
      const toDo = this.toDos.find((el) => el.id === id);
      if (toDo) {
        toDo.isDone = !toDo.isDone;
      }
    },
    deleteToDo(id: ToDo['id']) {
      this.toDos = this.toDos.filter((el) => id !== el.id);
    },
    createToDo(task: ToDo) {
      this.toDos.unshift(task);
    },
    saveTaskChanges(task: ToDo) {
      const toDo = this.toDos.find((el) => el.id === task.id);
      if (toDo) {
        toDo.title = task.title;
        toDo.isDone = task.isDone;
        toDo.isFavorite = task.isFavorite;
      }
      
    },
  },

  getters: {
    filteredToDos(): ToDo[] {
      let filteredToDos = this.toDos;
      if (this.activeFilter.isDone) {
        filteredToDos = filteredToDos.filter((el) => el.isDone);
      }
      if (this.activeFilter.isFavorite) {
        filteredToDos = filteredToDos.filter((el) => el.isFavorite);
      }
      return filteredToDos;
    },
  },
});
