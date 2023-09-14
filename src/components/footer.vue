<template>
    <footer class="app-footer">
      <div class="footer-content">
        <div class="copyright">
          &copy; {{ currentYear }} Интернет-магазин. Все права защищены.
        </div>
        <div class="contact-info">
          <p>Адрес: 123 улица, Город, Страна</p>
          <p>Email: info@example.com</p>
          <p>Телефон: +123 456 7890</p>
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
  .app-footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .copyright {
    font-size: 0.9rem;
  }
  
  .contact-info p {
    margin: 0.2rem;
  }
  </style>
  