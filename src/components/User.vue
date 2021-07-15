<template>
  <!-- Single row of the Users table -->
  <tr class="border-b border-t border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-200 dark:border-gray-200">
    <td class="border-r text-left py-1 px-2 ">{{ name }}</td>
    <td class=" text-left py-1 px-2">{{ username }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'User',
  props: {
    name: String,
    username: String
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
