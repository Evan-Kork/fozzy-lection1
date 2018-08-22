<template>
<div> 
  <input-component></input-component>
  <ul>
    <list-item v-for="todo in todos" :task="todo.item" ></list-item>
  </ul>
</div>
</template>

<script>
import TodoInput from "./List/TodoInput";
import ListItem from "./List/ListItem";
import { mapGetters } from "vuex";
export default {
  name: "Container",
  components: {
    "input-component": TodoInput,
    "list-item": ListItem
  },
  computed: {
    ...mapGetters(["todos"])
  },
  data: function() {
    return {
      array: [
        { item: 1, isHidden: false },
        { item: 1, isHidden: true },
        { item: 1, isHidden: false }
      ]
    };
  }
};
</script>