<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <!-- Лого или название сайта -->
                <router-link to="/" class="navbar-brand">Интернет магазин</router-link>
                
                <!-- Кнопка "Бургер" для мобильных устройств -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Меню навигации -->
                <div class="collapse navbar-collapse" id="navbarNav">
                </div>

                <!-- Корзина -->
                <div class="cart">
                        <a class="btn btn-outline-primary" href="#">Корзина <span class="badge bg-danger">{{ busket.length }}</span></a>
                        <router-link to="/admin">
                            <button type="button" class="btn btn-secondary" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"></path>
                            </svg>
                        </button>
                        </router-link>
                </div>
            </div>
        </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        authenticated: false, // Установите значение в true, если пользователь аутентифицирован
        busket: []
      };
    },
    methods: {
      
    },
  };
  </script>
  
  <style scoped>
.cart {
    display: flex;
    justify-content: space-between;
    width: 210px;
}
  </style>
  