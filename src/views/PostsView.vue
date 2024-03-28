<script setup>
import PostItem from '@/components/PostItem.vue';

</script>

]<template>
  <h2 class="view-header posts-view">Получение списка всех постов</h2>

  <ul class="posts-view__list">
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </ul>
  
  <el-button
    type="primary"
    size="large"
    class="posts-view__btn"
  >
    Загрузить страницу <span>2</span>
  </el-button>
</template>

<style lang="scss" scoped>

.posts-view{
  &__list{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    margin-top: 28px;
    padding: 0;
    gap: 20px;
  }

  &__btn{
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    cursor: pointer;
  }

}



</style>
