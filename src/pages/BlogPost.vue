<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="post" class="max-w-4xl mx-auto">
      <!-- 헤더 섹션 -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ post.title }}</h1>
        <div class="flex items-center gap-4 text-gray-600">
          <time class="text-sm">{{ post.date }}</time>
          <div class="flex gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- 메인 이미지 -->
      <img
        :src="post.imageUrl"
        :alt="post.title"
        class="w-full h-[400px] object-cover rounded-lg mb-8"
      />

      <!-- 본문 내용 -->
      <div class="prose prose-lg max-w-none">
        {{ post.content }}
      </div>

      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-4">댓글</h2>
        <!-- 댓글 섹션 -->
        <div class="pb-10">
          <AddComment :commentId="comments.length" @addComment="addComment" />
        </div>
        <BlogComment :comments="comments" :isFirst="true" class="border-t" />
        <!-- 하단 네비게이션 -->
        <div class="mt-12 flex justify-between">
          <button
            @click="router.push('/blog')"
            class="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>
    </div>

    <!-- 로딩 상태 -->
    <div v-else class="flex justify-center items-center min-h-[50vh]">
      <div class="text-gray-600">로딩 중...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { Post } from "../types/post";
import BlogComment from "../components/blog/BlogComment.vue";
import AddComment from "../components/comment/AddComment.vue";
import type { IComment } from "../types/IComment.ts";

const route = useRoute();
const router = useRouter();
const post = ref<Post | null>(null);

const comments = ref<IComment[]>([]);
const newComment = ref({ author: "", content: "" });

const addComment = (data: IComment) => {
  console.log("%o", data);
  comments.value.push({
    id: comments.value.length + 1,
    author: data.author,
    content: data.content,
    replies: [],
    showReply: false,
  });
  newComment.value = { author: "", content: "" }; // 입력 필드 초기화
};

// 실제 애플리케이션에서는 API 호출로 대체될 부분
const fetchPost = async (id: string) => {
  // 예시 데이터
  post.value = {
    id: Number(id),
    title: "블로그 포스트 제목",
    date: "2024-03-20",
    imageUrl:
      "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtMjAwLWV5ZS0wMzQyNzAyLmpwZw.jpg",
    excerpt: "요약 내용...",
    content: `
      여기에 긴 본문 내용이 들어갑니다.
      마크다운이나 HTML을 지원하도록 구현할 수도 있습니다.
      
      여러 줄의 텍스트가 들어갈 수 있습니다.
      
      이미지나 다른 미디어도 포함될 수 있습니다.
    `,
    tags: ["Vue", "프로그래밍", "웹개발"],
  };
};

onMounted(async () => {
  const postId = route.params.id as string;
  await fetchPost(postId);
});
</script>
