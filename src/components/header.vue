<template>
    <header class="app-header">
      <div class="logo">
        <router-link to="/">Интернет-магазин</router-link>
      </div>
      <nav class="nav-links">
        <router-link to="/">Главная</router-link>
        <router-link to="/products">Продукты</router-link>
        <router-link to="/cart">Корзина</router-link>
        <!-- Добавьте другие навигационные ссылки, если необходимо -->
      </nav>
      <div class="user-section">
        <!-- Здесь вы можете отобразить информацию о пользователе, например, имя пользователя, иконку профиля, и т.д. -->
        <router-link v-if="!authenticated" to="/login">Войти</router-link>
        <button v-else @click="logout">Выйти</button>
      </div>
    </header>
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
  .app-header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .nav-links {
    display: flex;
    gap: 20px;
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
  }
  
  .user-section {
    display: flex;
    align-items: center;
  }
  
  .user-section button {
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
  }
  </style>
  