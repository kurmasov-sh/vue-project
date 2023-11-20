<template>
    <div class="container mt-5 main-container">
      <h2>Корзина</h2>
  
      <!-- Проверка наличия товаров в корзине -->
      <div v-if="$store.state.cartItems.length === 0">
        <p>Ваша корзина пуста.</p>
      </div>
  
      <!-- Отображение списка товаров в корзине -->
      <div v-else>
        <div v-for="item in $store.state.cartItems" :key="item.id" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="/images/product-item_img2.jpg" :alt="item.name" class="img-fluid" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{{ item.name }}</h5>
                <p class="card-text">Цена: {{ item.price }} руб.</p>
                <!-- Дополнительные характеристики товара -->
                <ul>
                  <li>
                    <strong>Цвет:</strong> {{ item.color }}
                  </li>
                  <li>
                    <strong>Материал:</strong> {{ item.material }}
                  </li>
                </ul>
                <button @click="removeFromCart(item.id)" class="btn btn-danger">Удалить из корзины</button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Общая стоимость товаров в корзине -->
        <div class="mt-4">
          <h4>Общая стоимость: {{ totalCost }} руб.</h4>
          <button @click="checkout" class="btn btn-success">Оформить заказ</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      };
    },
    computed: {
      totalCost() {
        // Вычисление общей стоимости всех товаров в корзине
        return this.$store.state.cartItems.reduce((total, item) => parseInt(total) + parseInt(item.price), 0);      },
    },
    methods: {
      removeFromCart(itemId) {
        // Логика удаления товара из корзины по его идентификатору
        this.$store.state.cartItems = this.$store.state.cartItems.filter(item => item.id !== itemId);
      },
      checkout() {
        // Логика оформления заказа (например, переход к странице оплаты)
        // Можно использовать router.push для перехода к другой странице
        this.$router.push('/checkout'); // Пример перехода на страницу оплаты
      },
    },
  };
  </script>
  
  <style scoped>
  /* Здесь можно добавить стили по необходимости */
  </style>
  