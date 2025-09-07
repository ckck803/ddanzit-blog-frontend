<template>
  <div
    class="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors"
  >
    <div class="flex-grow">
      <NavigationBar v-if="!isEditorPage" />
      <router-view></router-view>
    </div>
    <BlogFooter v-if="!isEditorPage" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import NavigationBar from "./components/NavigationBar.vue";
import BlogFooter from "./components/blog/BlogFooter.vue";

const route = useRoute();
const isEditorPage = computed(() => route.name === 'Editor');
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
