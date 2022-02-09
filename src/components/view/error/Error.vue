<template>
    <div>
        <div class="d-flex flex-column notfound justify-content-center align-items-center">
          <div class="notfound__image">
            <img src="~@/assets/images/404.svg" alt="not found page">
          </div>
          <p class="notfound__text">Что-то пошло не так...</p>
          <div class="notfound__button">
            <router-link class="global-btn footer__button-btn" :to="`/${$i18n.locale}`">Вернуться на главную</router-link>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Error',
}
</script>

<style lang="scss">
.notfound {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 320px;
    height: 258px;
    background: url('~@/assets/images/vector-1.svg') no-repeat;
  }
  &__image {
    position: relative;
    max-width: 382px;
    height: 100%;
    @media screen and (min-width: 428px) {
      max-width: 544px;
    }
    @media screen and (min-width: 1366px) {
      max-width: 664px;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -15vw;
      width: 143px;
      height: 143px;
      background: url('~@/assets/images/ellipse-1.svg');
    }
    &::after {
      content: '';
      top: -8vw;
      right: 0;
      position: absolute;
      border: 14px solid transparent;
      border-left: 27px solid #A1CBF2;
    }
    img {
      width: 100%;
    }
  }
  &__text {
    margin-top: 55px;
    font-weight: 600;
    font-size: 18px;
  }
  &__button {
    margin-top: 23px;
    position: relative;
    &::before {
      content: '';
      top: 3vw;
      left: -15vw;
      position: absolute;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: #528BE6;
      opacity: .1;
    }
    a {
      padding-left: 32px;
      padding-right: 32px;
    }
  }
}
</style>