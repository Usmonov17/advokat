<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
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
