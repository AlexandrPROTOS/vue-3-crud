<script setup lang='ts'>
import { fetchPost } from '@/api/post';
import { type Post, postTemplate } from '@/helpers/post';
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const isLoading = ref(false);
const post = ref<Post>({ ...postTemplate });

const loadPost =  (): void => {
  const postId = route.params.id as string;
  isLoading.value = true;
  setTimeout(async () => {
    const result = await fetchPost(postId);
    post.value = result;
    isLoading.value = false;
  }, 500);
};

loadPost();
</script>

<template>
  <h2 class="view-header">Детальная страница поста</h2>

  <el-skeleton
    animated
    v-if="isLoading"
    class="skeleton-detail"
  >
    <template #template>
      <el-skeleton-item class="skeleton-detail__title" />

      <div class="skeleton-detail__body">
        <el-skeleton-item
          class="skeleton-detail__body-item"
          v-for="n in 3"
          :key="n"
        />
      </div>

      <el-skeleton-item class="skeleton-detail__id" />
    </template>
  </el-skeleton>

  <div class="post-details" v-else>  
    <h3 class="post-details__title">Title: {{ post.title }}</h3>
    <p class="post-details__body">Body: {{ post.body }}</p>
    <p class="post-details__id">user id: {{ post.userId }}</p>
  </div>
</template>

<style lang="scss" scoped>
.post-details{
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  gap: 20px;

  &__title,
  &__body,
  &__id{
    margin: 0;
    padding: 0;
  }

  &__title{
    font-size: 21px;
    line-height: 26px;
  }

  &__body{
    max-width: 783px;
    font-size: 20px;
    line-height: 24px;
  }

  &__id{
    font-size: 16px;
    line-height: 18px;
    text-align: right;
  }
}

.skeleton-detail{
  display: flex;
  flex-direction: column;
  margin-top: 30.5px;

  &__title{
    height: 21px;
    max-width: 700px;
  }

  &__body{
    max-width: 783px;
    margin-top: 24.5px;
  }

  &__body-item{
    height: 20px;

    &:not(:first-child){
      margin-top: 2px;
    }

    &:last-of-type{
      width: 30%;
    }
  }

  &__id{
    width: 60px;
    height: 16px;
    margin-top: 16px;
    align-self: flex-end;
  }
}
</style>
