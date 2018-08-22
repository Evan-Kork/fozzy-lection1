<template>
<div>
  <input type="text" v-model="inputValue">
  <button v-on:click="pushTodo">Додати</button>
</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoInput",
  data: function() {
    return {
      inputValue: ""
    };
  },
  methods: {
    pushTodo: function() {
      this.addTodo({ item: this.inputValue, isHidden: false });
      this.inputValue = "";
    },
    ...mapActions(["addTodo"])
  }
};
</script>


<style scoped>
input {
  margin-right: 10px;
}
</style>
