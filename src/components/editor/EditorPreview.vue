<template>
  <div class="container mx-auto px-4 py-8 overflow-scroll">
    <!-- <div class="flex flex-col w-full md:ml-2 overflow-scroll">
      <div
        class="overflow-scroll flex-1 p-4 border-gray-300 dark:border-gray-600 prose prose-sm max-w-none dark:prose-invert"
        v-html="parseMarkdown(props.content)"
      ></div>
    </div> -->
    <!-- 로딩 완료 후 실제 포스트 내용 표시 -->
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ props.title }}
        </h1>
        <div class="flex items-center gap-4 text-gray-600 dark:text-gray-400">
          <time class="text-sm">{{ formatDate(props.date) }}</time>
          <div class="flex gap-2">
            <span
              v-for="tag in props.tags"
              :key="tag"
              class="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              #{{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- 본문 내용 -->
      <div
        class="prose prose-lg max-w-none text-gray-900 dark:text-gray-100"
        v-html="parseMarkdown(props.content)"
      ></div>

      <!-- 
      <div
        class="overflow-scroll flex-1 p-4 border-gray-300 dark:border-gray-600 prose prose-sm max-w-none dark:prose-invert"
        v-html="parseMarkdown(props.content)"
      ></div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

interface EditorPreviewProps {
  title: string;
  content: string;
  tags: string[];
  date: Date;
}

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const props = defineProps<EditorPreviewProps>();
const parseMarkdown = (content: string) => {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkImages)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .processSync(content)
    .toString();
  // .use(remarkEmbedImages)
  // .process(markdown)
  // .then(res => res.)
};
</script>
