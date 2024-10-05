<template>
  <section>
    <h1>Page of A D M I N</h1>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: 'auth'
});
</script>