<template>
  <div class="m-2 shadow-md p-4 bg-white rounded">
    <input
        v-model="newReply.author"
        type="text"
        placeholder="이름"
        class="w-full p-2 mb-2 border rounded"
        @keyup.enter="addReply"
    />
    <textarea
        v-model="newReply.content"
        placeholder="답글 내용"
        class="w-full p-2 mb-2 border rounded"
        @keyup.enter="addReply"
    ></textarea>
    <button
        @click="addReply"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      답글 추가
    </button>
  </div>
</template>
<script lang="ts" setup>
import {defineProps, ref} from "vue";
import type {IComment} from "../../types/IComment.ts";

const emit = defineEmits(['addComment']);

const newReply = ref({author: "", content: ""});
const props = defineProps({
  commentId: {type: Number, required: false}
})

const addReply = () => {
  emit<IComment>('addComment', {
    id: props.commentId,
    author: newReply.value.author,
    content: newReply.value.content,
    replies: [],
    showReply: false
  });
};
</script>