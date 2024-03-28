<script setup>

</script>

<template>
  <li class="tasks-view__item task">
    <RouterLink to="/taskDetails" class="task__router-link">
      <div class="task__line1">
        <h3 class="task__name">Проверить почту</h3>
        <ElButton size="large" class="task__btn-favorite" />
      </div>
      <div class="task__line2">
        <el-button type="text" class="task__btn-edit">Редактировать</el-button>
        <el-button type="danger">Удалить</el-button>
      </div>
    </RouterLink>
  </li>
</template>

<style lang="scss" scoped>

.task{
  border: 1px solid rgb(170 170 170);

  &__router-link{
    display: flex;
    flex-direction: column;
    min-height: 118px;
    padding: 17px;
    text-decoration: none;
  }

  &__router-link:visited{
    color: black;
  }

  &__line1,
  &__line2{
  display: flex;
  justify-content: space-between;
  }

  &__line1{
  height: 38px;
  }

  &__name{
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 22px;
  }

  &__btn-favorite{
    width: 38px;
    height: 38px;
    padding: 0;
    font-size: 0;
    background-image: url('../assets/icons/isfavoriteFalse.svg');
    background-position: center;
    background-repeat: no-repeat;
  }

  &__line2{
  height: 32px;
  margin-top: 12px;
  }

  &__btn-edit{
    color: black;
  }
}


</style>
