<template>
  <UILoader v-if="loading" />
  <section v-else>
    <div class="top border-y-2 border-neutral-100 py-2 flex items-center mb-4">
      <h2 class="w-1/4 capitalize text-[26px] font-medium text-neutral-400">Names</h2>
      <h2 class="w-1/4 capitalize text-[26px] font-medium text-neutral-400">Description</h2>
    </div>
    <div class="border-b border-x-neutral-100 py-4 flex items-center" v-for="(blog, index) in blogs" :key="index"
      v-if="blogs">
      <h2 class="w-1/4">
        {{ blog.name }}
      </h2>
      <h2 class="w-2/4 px-2">
        {{ blog.description }}
      </h2>
    </div>
    <div class="p-6" v-else>
      <NuxtImg src="/no-data.svg" class="w-max mx-auto" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useBlogsStore } from '~/store/blogs';

const blogsStore = useBlogsStore();
const blogs = computed(() => blogsStore.blogs);
const loading = ref(true)
onMounted(async () => {
  await blogsStore.getBlogs();
  loading.value = false
});

definePageMeta({ layout: 'admin' });
</script>
