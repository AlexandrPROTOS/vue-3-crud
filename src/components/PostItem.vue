<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <li class="posts-view__item post">
    <RouterLink to="/postDetails" class="post__router-link">
      <h3 class="post__name">
        sunt aut facere repellat provident occaecati
        excepturi optio reprehenderit
      </h3>
      <p class="post__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium eius commodi modi est voluptatibus veniam maxime. Illo ab vel odio neque delectus molestiae, repellat aperiam facilis architecto doloremque nulla?</p>
      <p class="post__id">user id:<span> 1</span></p>
    </RouterLink>
  </li>
</template>

<style lang="scss" scoped>

.post{
  width: calc(50% - 10px);

  &__router-link{
    display: flex;
    flex-direction: column;
    min-height: 186px;
    padding: 17px;
    gap: 16px;
    text-decoration: none;
    color: black;
    cursor: pointer;
    border: 1px solid rgb(170 170 170);
  }

  &__name,
  &__text,
  &__id{
    margin: 0;
    padding: 0;
  }

  &__id{
    margin-left: auto;
  }
}

</style>
