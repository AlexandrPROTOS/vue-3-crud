<script setup>

import { RouterLink } from 'vue-router';

</script>

<template>
  <header class="header">
    <div class="main-container header__main-container">
      <p class="header__main-name">Vue 3 CRUD app</p>
      <nav>
        <ul class="header__links-list">
          <li class="header__link"><router-link to="/" class="header__link-a">Посты</router-link></li>
          <li class="header__link"><router-link to="/tasks" class="header__link-a">Задачи</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header{
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: white;
  box-shadow: 0 0 5px 2px rgb(100 100 111 / 0.2);

  &__main-container{
    display: flex;
    align-items: center ;
    justify-content: space-between;
    height: 50px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  &__main-name{
    margin: 0;
    padding: 0;
    font-size: 15px;
    line-height: 18.4px;
    font-weight: 400;
    text-align: center;
    color: rgb(0 0 0 / 1);
  }

  &__links-list{
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap:10px ;
  }

  &__link{
    padding:3px 8px 4px;
  }

  &__link-a{
    text-decoration: none;
    color: rgb(51 51 51 / 1)
  }

  &__link-a:hover{
    border-bottom: 1px solid rgb(0 0 0);
    transition: 0.15s ease;
  }
}

.router-link-active{
  color: rgb(0 0 139 / 1);
  border-bottom: 1px solid rgb(0 0 139 / 1);
}
</style>
