<script setup lang='ts'>
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

<style lang="scss" scoped>
:deep(){
  .el-dialog {
    padding: 20px;

    &__header{
      padding: 0;
    }

    &__headerbtn{
      width: 61.6px;
      height: 61.6px;
    }

    &__footer {
      margin-top: 40px;
      padding: 0;
    }

    &__text{
      margin: 0;  
    }

    &__error{
      margin-bottom: 8px;
      text-align: left;
      color: red;
    }

    &__favorite{
      width: 100%;
      margin-top: 16px;
    }

    &__btns{
      margin-top: 40px;
    }

    &__btns-delete{
      width: calc(50% - 6px);
    }
  }
} 

.main{
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top:  98px;
  padding-bottom: 100px;

  @media ( width < 341px) {
    padding-top: 70px;
    padding-bottom: 70px;
  }
}
</style>
