<template>
  <li>{{task}}</li>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    task: String
  }
};
</script>
