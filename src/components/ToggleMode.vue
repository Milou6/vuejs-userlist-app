<template>
  <div class="mr-4 absolute right-0 top-6">
    <!-- Label for sun/moon -->
    <div class="transform hover:scale-125">
      <label
        @click="toggleMode"
        for="mode"
        class="cursor-pointer text-2xl"
      >{{themeIcon}}</label>
    </div>
    <!-- Checkbox to toggle theme -->
    <input
      @click="toggleMode"
      type="checkbox"
      name="mode"
      id="checkbox"
      :checked="toggled"
      class="invisible"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ToggleMode',
  props: {
    toggled: Boolean
  },
  computed: {
    themeIcon () {
      if (this.toggled) return '☀️'
      return '🌙'
    }
  },
  methods: {
    // Emits event to be caught by App component & switch Theme
    toggleMode () {
      if (this.toggled) {
        this.$emit('toggle-theme', 'light')
      } else {
        this.$emit('toggle-theme', 'dark')
      }
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
