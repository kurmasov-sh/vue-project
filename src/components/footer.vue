<template>
<footer class="bg-dark text-light text-center py-4">
            <div class="row">
                <div class="col-md-6">
                    <p>&copy; 2023 Ваша компания. Все права защищены.</p>
                </div>
                <div class="col-md-6">
                    <ul class="list-inline">
                        <li class="list-inline-item"><a href="#">Главная</a></li>
                        <li class="list-inline-item"><a href="#">О нас</a></li>
                        <li class="list-inline-item"><a href="#">Услуги</a></li>
                        <li class="list-inline-item"><a href="#">Контакты</a></li>
                    </ul>
                </div>
        </div>
    </footer>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
 
  </style>
  