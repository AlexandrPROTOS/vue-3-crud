<script setup>

</script>

<template>
  <footer class="footer">
    <div class="main-container footer__main-container">
      <div class="footer__content">
        <p class="footer__personal-name">Абдуркаев Асадулла</p>
        <a class="footer__link" href="https://github.com/AsadullahTM" target="_blank">Мой гитхаб</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer{
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: white;
  box-shadow: 0 0 5px 2px rgb(100 100 111 / 0.2);

  &__main-container{
    height: 60px;
    padding-top: 20.5px;
    padding-bottom: 20.5px;
  }

  &__content{
    display: flex;
    justify-content: end;
    gap:40px ;
  }

  &__personal-name{
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 18.4px;
    font-weight: 400;
    text-align: center;
    color: rgb(0 0 0 / 1);
  }
    
  &__link{
    width: 80px;
    height: 20px;
    font-size: 0;
    background-image: url("../assets/icons/github-mark.svg");
  }
}
</style>
