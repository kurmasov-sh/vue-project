<template>
 <div class="container">
  <div class="header">
  <div class="header-wrapper">
    <div class="header__logo">Мебельный магазин</div>
    <div class="header__menu">
      <ul>
        <li>1 пункт меню</li>
      </ul>
    </div>
    <div class="header__right-column">
      <div class="basket">корзина</div>
      <div class="auth-logo">Авторизация</div>
    </div>
  </div>
 </div>
 </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        authenticated: false, // Установите значение в true, если пользователь аутентифицирован
      };
    },
    methods: {
      logout() {
        // Здесь можно реализовать логику выхода из системы
        // Например, удалить данные о сеансе пользователя и перенаправить на страницу входа.
        this.authenticated = false;
        this.$router.push("/login");
      },
    },
  };
  </script>
  
  <style scoped>

.container {
  margin-left: 200px;
  margin-right: 200px;

}
 .header-wrapper {
  background-color: rgb(187, 187, 187);
  display: flex;
  justify-content: space-between;
  max-height: 150px;
 }
  </style>
  