<template>
  <div
    class="max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
    @click="navigateToPost"
  >
    <img
      :src="post.imageUrl"
      :alt="post.title"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <h2 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">{{ post.title }}</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ post.date }}</p>
      <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{{ post.excerpt }}</p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
        >
          #{{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Post } from "../../types/post";

const router = useRouter();

const props = defineProps<{
  post: Post;
}>();

const navigateToPost = () => {
  router.push(`/${props.post.id}`);
};
</script>

<style scoped>
.blog-card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  margin: 1rem;
  max-width: 350px;
}

.blog-card:hover {
  transform: translateY(-5px);
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
  color: #333;
}

.card-date {
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
}

.card-excerpt {
  color: #555;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f0f0f0;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  color: #666;
}
</style>
