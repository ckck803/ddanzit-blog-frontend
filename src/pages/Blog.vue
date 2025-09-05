<template>
  <div class="w-full flex mx-auto py-8 items-center justify-center">
    <div
      class="px-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-14"
    >
      <!-- 로딩 중일 때 스켈레톤 UI 표시 -->
      <template v-if="loading">
        <SkeletonCard v-for="n in 6" :key="n" />
      </template>

      <!-- 로딩 완료 후 실제 블로그 카드 표시 -->
      <template v-else>
        <BlogCard v-for="post in posts" :key="post.id" :post="post" />
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import BlogCard from "../components/blog/BlogCard.vue";
import SkeletonCard from "../components/skeleton/SkeletonCard.vue";

interface Post {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  excerpt: string;
  tags: string[];
}

const loading = ref(true);

const posts = ref<Post[]>([
  {
    id: 1,
    title: "첫 번째 블로그 포스트",
    date: "2024-03-20",
    imageUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg",
    excerpt:
      "이것은 첫 번째 블로그 포스트의 요약입니다. 더 긴 내용이 있다면 3줄까지만 표시됩니다.",
    tags: ["Vue", "프로그래밍", "웹개발"],
  },
  {
    id: 2,
    title: "첫 번째 블로그 포스트",
    date: "2024-03-20",
    imageUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg",
    excerpt:
      "이것은 첫 번째 블로그 포스트의 요약입니다. 더 긴 내용이 있다면 3줄까지만 표시됩니다.",
    tags: ["Vue", "프로그래밍", "웹개발"],
  },
  {
    id: 3,
    title: "첫 번째 블로그 포스트",
    date: "2024-03-20",
    imageUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg",
    excerpt:
      "이것은 첫 번째 블로그 포스트의 요약입니다. 더 긴 내용이 있다면 3줄까지만 표시됩니다.",
    tags: ["Vue", "프로그래밍", "웹개발"],
  },
  {
    id: 4,
    title: "첫 번째 블로그 포스트",
    date: "2024-03-20",
    imageUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg",
    excerpt:
      "이것은 첫 번째 블로그 포스트의 요약입니다. 더 긴 내용이 있다면 3줄까지만 표시됩니다.",
    tags: ["Vue", "프로그래밍", "웹개발"],
  },
  {
    id: 5,
    title: "첫 번째 블로그 포스트",
    date: "2024-03-20",
    imageUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg",
    excerpt:
      "이것은 첫 번째 블로그 포스트의 요약입니다. 더 긴 내용이 있다면 3줄까지만 표시됩니다.",
    tags: ["Vue", "프로그래밍", "웹개발"],
  },
  {
    id: 6,
    title: "첫 번째 블로그 포스트",
    date: "2024-03-20",
    imageUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg",
    excerpt:
      "이것은 첫 번째 블로그 포스트의 요약입니다. 더 긴 내용이 있다면 3줄까지만 표시됩니다.",
    tags: ["Vue", "프로그래밍", "웹개발"],
  },
  {
    id: 7,
    title: "첫 번째 블로그 포스트",
    date: "2024-03-20",
    imageUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg",
    excerpt:
      "이것은 첫 번째 블로그 포스트의 요약입니다. 더 긴 내용이 있다면 3줄까지만 표시됩니다.",
    tags: ["Vue", "프로그래밍", "웹개발"],
  },
]);

onMounted(async () => {
  // 실제 API 호출을 시뮬레이션하기 위한 딜레이
  await new Promise((resolve) => setTimeout(resolve, 2000));
  loading.value = false;
});
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
