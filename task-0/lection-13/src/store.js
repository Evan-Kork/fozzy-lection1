import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [{ item: "1", isHidden: false, order: 2 }]
  },
  getters: {
    todos: state => {
      return state.todos;
    }
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    }
  }
});
