<template>
  <div class="pt-4">
    <img :src="avatar" alt="Avatar" class="w-10 h-10 rounded-full"/>
  </div>
  <div class="flex-1">
    <div class="py-2">
      <p class="text-gray-800 font-bold">{{ props.author }}</p>
      <p class="text-gray-700 py-1">{{ props.content }}</p>
      <div class="flex space-x-3 py-1 pl-2">
        <button
            @click="$emit('reply')"
            class="text-sm text-blue-500 hover:underline"
        >
          <div class="w-4">
            <img :src="props.iconReply" alt="Reply"/>
          </div>
        </button>
        <button @click="$emit('like')" class="flex items-center space-x-1">
          <div class="w-4">
            <img :src="props.liked ? props.iconHeartFilled : props.iconHeart" alt="Like"/>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  avatar: {type: String, required: true},
  author: {type: String, required: true},
  content: {type: String, required: true},
  liked: {type: Boolean, default: false},
  iconReply: {type: String, required: true},
  iconHeart: {type: String, required: true},
  iconHeartFilled: {type: String, required: true},
});
</script>
