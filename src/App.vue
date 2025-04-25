<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex-grow">
      <NavigationBar />
      <router-view></router-view>
    </div>
    <BlogFooter />
  </div>
</template>
<script setup lang="ts">
import NavigationBar from "./components/NavigationBar.vue";
import BlogFooter from "./components/blog/BlogFooter.vue";
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
