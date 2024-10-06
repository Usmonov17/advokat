<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  router.push('/admin/categories');
});
definePageMeta({
  layout: 'admin',
  middleware: 'auth'
}
);

</script>
