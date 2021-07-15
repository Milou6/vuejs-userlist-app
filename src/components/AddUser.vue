<template>
  <form @submit.prevent="onSubmit" class="w-full dark:text-gray-200">
    <div class="flex px-2">

      <div class="flex flex-col justify-around">
        <label>Name</label>
        <label>Username</label>
      </div>

      <div class="flex flex-col flex-grow">
        <input
          type="text"
          v-model="name"
          name="name"
          placeholder=" John..."
          class="w-full rounded border ml-2 mb-2 border-gray-200 focus:border-green-200 focus:border-2 focus:outline-none dark:text-gray-600"
        />
        <input
          type="text"
          v-model="username"
          name="username"
          placeholder=" Doe..."
          class="w-full rounded border ml-2 mb-2 border-gray-200 focus:border-green-200 focus:border-2 focus:outline-none dark:text-gray-600"
        />
      </div>
    </div>

    <input type="submit" value="Add" class="btn" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'AddUser',
  data () {
    return {
      name: '',
      username: ''
    }
  },
  methods: {
    onSubmit () {
      // Cancel if either form field is empty
      if (!this.name || !this.username) return

      const newUser = {
        name: this.name,
        username: this.username
      }

      axios.post('https://jsonplaceholder.typicode.com/users', newUser).then((response) => {
        console.log(response)
        if (response.status === 201) {
          // Emitted event updates users list in the App component
          this.$emit('add-user', newUser)

          // Reset the form fields
          this.name = ''
          this.username = ''
        }
      })
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
