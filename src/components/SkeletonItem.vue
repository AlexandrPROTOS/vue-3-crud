<script setup>
</script>

<template>
  <li class="skeleton">
    <el-skeleton class="skeleton__block" animated>
      <template #template>
        <el-skeleton-item class="skeleton__name" />

        <div class="skeleton__text">
          <el-skeleton-item 
            v-for="n in 3" 
            :key="n"
            class="skeleton__text-item"
          />
        </div>

        <el-skeleton-item class="skeleton__id" />
      </template>
    </el-skeleton>
  </li>
</template>

<style lang="scss" scoped>
.skeleton{
  &__block{
    display: flex;
    flex-direction: column;
    min-height: 186px;
    padding: 0 17px;
    border: 1px solid rgb(170 170 170);
    box-shadow: 0 2px 8px 0 rgba(99 99 99 / 0.2);
  }

  &__name{
    width: 50%;
    height: 17px;
    margin-top: 19.5px;
  }

  &__text{
    margin-top: 21.5px;
  }

  &__text-item{
    height: 14px;
      
    &:not(:first-child){
      margin-top: 3px;
    }

    &:last-of-type{
      width: 60%;
    }
  }
  
  &__id{
    width: 70px;
    height: 13px;
    margin-top: 16px;
    align-self: flex-end;
  }
}
</style>
