<template>
  <div class="container mt-5 main-container">
    <div class="row">
      <!-- Изображение товара -->
      <div class="col-lg-6">
        <img :src="product.image" :alt="product.name" class="img-fluid" />
      </div>

      <!-- Информация о товаре -->
      <div class="col-lg-6">
        <h2>{{ $route.params.name }}</h2>
        <p class="lead">{{ product.description }}</p>

        <!-- Характеристики товара -->
        <div class="mt-4">
          <h4>Характеристики:</h4>
          <ul class="list-group">
            <li class="list-group-item">
              <strong>Цвет:</strong>
              <select v-model="selectedColor" class="form-select">
                <option v-for="color in product.colors" :key="color">{{ color }}</option>
              </select>
            </li>
            <li class="list-group-item">
              <strong>Материал:</strong>
              <select v-model="selectedMaterial" class="form-select">
                <option v-for="material in product.materials" :key="material">{{ material }}</option>
              </select>
            </li>
            <!-- Другие характеристики товара -->
          </ul>
        </div>

        <!-- Цена и кнопка "Добавить в корзину" -->
        <div class="mt-4">
          <p class="lead">
            <strong>Цена:</strong> {{ $route.params.price }} руб.
          </p>
          <button @click="addToCart" class="btn btn-primary">Добавить в корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        id: 1,
        name: 'Название товара',
        description: 'Описание товара',
        image: 'путь_к_изображению.jpg',
        price: 1000,
        colors: ['Красный', 'Синий', 'Зеленый'],
        materials: ['Дерево', 'Металл', 'Пластик'],
        // Другие характеристики товара
      },
      selectedColor: '',
      selectedMaterial: '',
    };
  },
  methods: {
    addToCart() {
      // Логика добавления товара в корзину
      console.log('Товар добавлен в корзину:', this.product.name, this.selectedColor, this.selectedMaterial);
    },
  },
};
</script>

<style scoped>
/* Здесь можно добавить стили по необходимости */
</style>
