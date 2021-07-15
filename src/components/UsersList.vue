<template>
  <div
    id="usersTable"
    class="max-h-40 border rounded-xl overflow-y-auto overscroll-contain dark:border-opacity-0"
  >
    <table class="table-auto relative dark:bg-gray-100 ">
      <!-- Table Header, sticky & allows sorting -->
      <thead class="sticky top-0 bg-white dark:bg-gray-300 dark:text-black">
        <tr>
          <!-- Each Table column can be sorted -->
          <th
            @click="sortUsers('name')"
            class="cursor-pointer"
          >
            Name <span>{{ getSortingTip("name") }}</span>
          </th>
          <!-- Each Table column can be sorted -->
          <th
            @click="sortUsers('username')"
            class="cursor-pointer"
          >
            Username <span>{{ getSortingTip("username") }}</span>
          </th>
        </tr>
      </thead>

      <!-- Table Body, loops over User components -->
      <tbody>
        <User
          v-for="(user, index) in users"
          :key="index"
          :name="user.name"
          :username="user.username"
        />
      </tbody>

    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import User from './User.vue'

export default defineComponent({
  name: 'UsersList',
  components: {
    User
  },
  props: {
    users: Array
  },
  data () {
    return {
      sortingCol: '', // current column that is sorting ('name'/'username')
      sortingOrder: '' // sorting order ('asc'/'desc')
    }
  },
  methods: {
    sortUsers (column: string) {
      // if column clicked is already sorting, just switch asc/desc
      if (this.sortingCol === column) {
        this.sortingOrder = this.sortingOrder === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortingCol = column
        this.sortingOrder = 'asc'
      }

      // init sorting on first click
      if (this.sortingCol === '') {
        this.sortingCol = column
        this.sortingOrder = 'asc'
      }

      this.$emit('sort-users', this.sortingCol, this.sortingOrder)
    },
    getSortingTip (col: string): string {
      if (col === this.sortingCol) {
        return this.sortingOrder === 'asc' ? '▲' : '▼'
      }
      return '▼'
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#usersTable {
  -ms-overflow-style: none; /* Hide scrollbar in FF and Edge*/
  scrollbar-width: none;
}
#usersTable::-webkit-scrollbar {
  display: none; /* Hide scrollbar in Chrome, Safari*/
}
</style>
