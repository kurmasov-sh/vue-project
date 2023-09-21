<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <!-- Лого или название сайта -->
                <a class="navbar-brand" href="#">Интернет магазин</a>
                
                <!-- Кнопка "Бургер" для мобильных устройств -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Меню навигации -->
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Главная</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Каталог</a>
                        </li>
                    
                    </ul>
                </div>

                <!-- Корзина -->
                <div class="cart">
                    <a class="btn btn-outline-primary" href="#">Корзина <span class="badge bg-danger">3</span></a>
                </div>
            </div>
        </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        authenticated: false, // Установите значение в true, если пользователь аутентифицирован
      };
    },
    methods: {
      
    },
  };
  </script>
  
  <style scoped>


  </style>
  