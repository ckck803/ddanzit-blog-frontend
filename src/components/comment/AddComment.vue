<template>
  <div class="space-y-3">
    <div class="flex items-center justify-between">
      <input
        v-model="newReply.author"
        @keydown.enter="addReply"
        type="text"
        placeholder="이름"
        class="flex-1 mr-3 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 text-sm"
      />

      <button
        @click="addReply"
        :disabled="!newReply.author.trim() || !newReply.content.trim()"
        class="px-4 py-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed dark:bg-green-600 dark:hover:bg-green-700 dark:disabled:bg-gray-600 text-white text-sm font-medium rounded-md transition-colors"
      >
        댓글 작성
      </button>
    </div>
    <textarea
      v-model="newReply.content"
      @keydown.enter.prevent="handleEnterKey"
      placeholder="댓글을 작성하세요"
      rows="3"
      class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 resize-none text-sm"
    ></textarea>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";

const emit = defineEmits(["addComment"]);

const newReply = ref({ author: "", content: "" });
const props = defineProps({
  commentId: { type: Number, required: false },
});

const addReply = () => {
  if (!newReply.value.author.trim() || !newReply.value.content.trim()) {
    return;
  }

  emit("addComment", {
    id: props.commentId,
    author: newReply.value.author,
    content: newReply.value.content,
    replies: [],
    showReply: false,
  });

  // 입력 필드 초기화
  newReply.value = { author: "", content: "" };
};

const handleEnterKey = (event: KeyboardEvent) => {
  if (event.shiftKey) {
    // Shift+Enter는 줄바꿈
    return;
  }
  // Enter만 누르면 댓글 작성
  addReply();
};
</script>
