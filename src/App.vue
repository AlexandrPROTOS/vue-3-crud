<script setup>
import PageFooter from '@/components/PageFooter.vue';
import PageHeader from '@/components/PageHeader.vue';
import { RouterView } from 'vue-router';
</script>

<script setup>

</script>

<template>
  <PageHeader />
  <main class="main main-container">
    <RouterView />
  </main>
  <PageFooter />
</template>

<style lang="scss" scoped>
</style>
