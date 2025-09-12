<template>
  <li
    class="relative before:absolute before:top-[60px] before:left-[45px] before:translate-x-[-25px] before:w-[2px] before:h-[calc(100%-80px)] before:bg-gray-300 dark:before:bg-gray-600 flex items-start space-x-4 rounded-lg"
  >
    <div class="flex items-start space-x-4 w-full">
      <div class="pt-2">
        <img :src="avatar" alt="Avatar" class="w-10 h-10 rounded-full" />
      </div>
      <div class="flex-1">
        <div class="">
          <div>
            <p class="text-gray-800 dark:text-white font-bold">
              {{ props.comment.author }}
            </p>
            <p class="text-gray-700 dark:text-gray-300 py-1">
              {{ props.comment.content }}
            </p>
          </div>
          <div class="flex items-center space-x-3 py-1 pl-2">
            <button
              @click="$emit('reply')"
              class="flex items-center space-x-1 text-xs text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-150"
            >
              <img :src="iconReply" alt="Reply" class="w-3.5 h-3.5" />
              <span>답글</span>
            </button>
            <button
              @click="liked = !liked"
              class="flex items-center space-x-1 text-xs transition-colors duration-150"
            >
              <img
                :src="liked ? iconHeartFilled : iconHeart"
                alt="Like"
                class="w-3.5 h-3.5"
              />
              <span>좋아요</span>
            </button>
          </div>
        </div>
        <div class="mx-auto">
          <!-- 대댓글 목록 -->
          <BlogComment :comments="comment.replies" :isFirst="false" />
          <div v-if="comment.showReply" class="mt-2">
            <AddComment :comment="comment" @addComment="addComment" />
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { defineProps, type PropType, ref } from "vue";
import iconReply from "../../assets/icon/icon_reply.svg";
import iconHeart from "../../assets/icon/icon_heart.svg";
import iconHeartFilled from "../../assets/icon/icon_heart_filled.svg";
import type { IComment } from "@/types/IComment.ts";
import BlogComment from "./BlogComment.vue";
import AddComment from "../comment/AddComment.vue";

const emit = defineEmits(["reply", "addReply"]);

const props = defineProps({
  comment: { type: Object as PropType<IComment>, required: true },
  avatar: { type: String, required: true },
  liked: { type: Boolean, default: false },
});

const liked = ref(false);

const newReply = ref({ author: "", content: "" });

const addComment = (data: IComment) => {
  props.comment.replies.push({
    id: props.comment.replies.length + 1,
    author: data.author,
    content: data.content,
    replies: [],
    showReply: false,
  });

  console.log("%o", props.comment.replies);
  props.comment.showReply = false;
  // emit("addReply", data);
};

// const addReply = (commentId: number) => {
//   const comment = comments.value.find((c) => c.id === commentId);
//   if (comment && newReply.value.author && newReply.value.content) {
//     comment.replies.push({
//       id: comment.replies.length + 1,
//       author: newReply.value.author,
//       content: newReply.value.content,
//     });
//     newReply.value = {author: "", content: ""}; // 입력 필드 초기화
//     comment.showReply = false; // 대댓글 입력창 닫기
//   }
// };

const addReply = (commentId: number) => {
  emit("addReply", {
    id: commentId,
    author: newReply.value.author,
    content: newReply.value.content,
    replies: [],
    showReply: false,
  });
};
</script>
