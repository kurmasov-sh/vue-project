<template>
    <div class="container mt-5">
      <h1>Панель администратора</h1>
      
      <!-- Форма для создания товара -->
      <form @submit.prevent="createProduct">
        <div class="mb-3">
          <label for="product-name" class="form-label">Название товара</label>
          <input type="text" class="form-control" id="product-name" v-model="newProduct.name" required>
        </div>
        <div class="mb-3">
          <label for="product-description" class="form-label">Описание товара</label>
          <textarea class="form-control" id="product-description" v-model="newProduct.description" required></textarea>
        </div>
        <div class="mb-3">
          <label for="product-price" class="form-label">Цена товара</label>
          <input type="number" class="form-control" id="product-price" v-model="newProduct.price" required>
        </div>
        <button type="submit" class="btn btn-primary">Создать товар</button>
      </form>
  
      <!-- Таблица для отображения и управления товарами -->
      <table class="table mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Описание</th>
            <th>Цена</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products" :key="product.id">
            <td>{{ index + 1 }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>
              <button @click="editProduct(product)" class="btn btn-info">Редактировать</button>
              <button @click="deleteProduct(product.id)" class="btn btn-danger">Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          description: '',
          price: 0,
        },
        products: [], // Здесь должны храниться данные о товарах
      };
    },
    methods: {
      createProduct() {
        // Здесь можно добавить логику создания товара и обновление списка товаров
        // this.products.push(this.newProduct);
        // this.newProduct = { name: '', description: '', price: 0 };
      },
      editProduct(product) {
        // Здесь можно добавить логику редактирования товара
      },
      deleteProduct(productId) {
        // Здесь можно добавить логику удаления товара и обновление списка товаров
        // this.products = this.products.filter(product => product.id !== productId);
      },
    },
  };
  </script>
  