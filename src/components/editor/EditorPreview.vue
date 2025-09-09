<template>
  <div class="flex flex-col w-full md:ml-2 overflow-scroll">
    <!-- <div class="bg-white dark:bg-gray-800 p-6 flex flex-col h-full">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        미리보기
      </h2>
      <div
        class="overflow-scroll flex-1 p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 prose prose-sm max-w-none dark:prose-invert"
        v-html="parseMarkdown(props.content)"
      ></div>
    </div> -->
    <div
      class="overflow-scroll flex-1 p-4 border-gray-300 dark:border-gray-600 prose prose-sm max-w-none dark:prose-invert"
      v-html="parseMarkdown(props.content)"
    ></div>
  </div>
</template>
<script setup lang="ts">
import "highlight.js/styles/atom-one-dark.css";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

interface EditorPreviewProps {
  content: string;
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
