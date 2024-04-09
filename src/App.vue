<script setup>
import PageFooter from '@/components/PageFooter.vue';
import PageHeader from '@/components/PageHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <PageHeader />
  <main class="main main-container">
    <RouterView />
  </main>
  <PageFooter />
</template>

<style lang="scss">
main{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top:  98px;
  padding-bottom: 100px;
}

.view-header{
  margin: 0;
  padding: 0;
  font-size: 31px;
  line-height: 36px;
  color: rgb(0 0 0 );
}
</style>
