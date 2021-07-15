<template>
  <div id="app-wrapper" class="relative flex flex-col items-center bg-gray-100 h-screen dark:bg-gray-800 ">
    <!-- Header -->
    <h1 class="h-64 bg-gradient-to-r from-green-400 to-blue-500 text-gray-700 mb-8 py-4 w-full text-5xl font-extrabold dark:from-indigo-900 dark:to-green-500 dark:text-gray-200">
      User List
      <font-awesome-icon
        icon="user-friends"
        size="2x"
      ></font-awesome-icon>
    </h1>

    <!-- Skewed area on Header -->
    <div class="absolute top-56 transform -skew-y-6 bg-gray-100 h-32 w-full dark:bg-gray-800">
    </div>

    <!-- Dark/Light mode toggle -->
    <ToggleMode
      @toggle-theme="toggleTheme"
      :toggled="isDarkThemeOn"
    />

    <!-- User form + table -->
    <div class="flex flex-col z-10 absolute top-44 gap-y-8 p-8 items-center justify-center bg-white rounded border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600">
      <AddUser @add-user="addUser" />
      <UsersList
        @sort-users="sortUsers"
        :users="users"
      />

      <!-- Delete user button -->
      <button
        id="delete-btn"
        @click="deleteLastUser"
        class="btn bg-gray-400 dark:bg-green-600"
      >
        Delete Last User
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import UsersList from './components/UsersList.vue'
import AddUser from './components/AddUser.vue'
import ToggleMode from './components/ToggleMode.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserFriends)

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default defineComponent({
  name: 'App',
  components: {
    UsersList,
    AddUser,
    ToggleMode,
    FontAwesomeIcon
  },
  data () {
    return {
      users: [] as User[], // users list fetched from jsonplaceholder
      isDarkThemeOn: false
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => (this.users = response.data))
      .catch((error) => console.log(error))

    /* On first visit, we check if User has a Light/Dark theme preference set.
     * The User can manually override this preference with the Theme Toggle,
     * which saves it to localStorage.
     */
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      this.isDarkThemeOn = localTheme === 'dark'
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } else {
      // user has no preference in localStorage
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
        this.isDarkThemeOn = true
      } else {
        document.documentElement.classList.remove('dark')
        this.isDarkThemeOn = false
      }
    }
  },
  methods: {
    // Catches even emitted from ToggleMode, switches theme
    toggleTheme (theme: string) {
      if (theme === 'light') {
        this.isDarkThemeOn = false
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      } else {
        this.isDarkThemeOn = true
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      }
    },
    async addUser (newUser: User) {
      const newUsersList: User[] = [...this.users, newUser]
      this.users = newUsersList

      // await for table to update before scrolling to new User
      await this.users

      // scroll table to new User
      const usersTable = document.getElementById('usersTable') as HTMLElement
      usersTable.scrollBy({ top: 999, behavior: 'smooth' })
    },
    deleteLastUser () {
      if (confirm('Are you sure you want to delete last User?')) {
        const lastUserId = this.users[this.users.length - 1].id
        axios
          .delete(`https://jsonplaceholder.typicode.com/users/${lastUserId}`)
          .then((response) => {
            console.log(response)

            // if DELETE request is successful, update the UI
            if (response.status === 200) {
              const newUsersList = this.users.slice(0, -1)
              this.users = newUsersList
            }
          })
          .catch((error) => console.log(error))
      }
    },
    // Allows to sort the Users table by name/username, in ascending/descending order.
    sortUsers (sortingCol: keyof User, sortingOrder: string) {
      const usersCopy = [...this.users]
      usersCopy.sort((a, b) => {
        const propertyA = a[sortingCol]
        const propertyB = b[sortingCol]
        if (propertyA < propertyB) {
          return -1
        }
        if (propertyA > propertyB) {
          return 1
        }
        return 0
      })

      // if order is 'desc', reverse array before updating UI
      if (sortingOrder === 'desc') usersCopy.reverse()
      this.users = usersCopy
    }
  }
})
</script>

<style lang="scss">
html {
  overflow-x: hidden;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app-wrapper {
  height: 110vh;
}
</style>
