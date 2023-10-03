<template>
    <div class="container mt-5">
      <h1>{{ product.name }} - Детали товара</h1>
      <p>{{ product.description }}</p>
      <p>Цена: {{ product.price }}</p>
  
      <!-- Выбор характеристики из списка -->
      <div class="mb-3">
        <label for="characteristic-select" class="form-label">Выберите характеристику</label>
        <select class="form-select" id="characteristic-select" v-model="selectedCharacteristic">
          <option value="" disabled>Выберите характеристику</option>
          <option v-for="(char, index) in availableCharacteristics" :key="index" :value="char">
            {{ char.name }}
          </option>
        </select>
      </div>
      
      <button @click="addCharacteristic" class="btn btn-primary">Добавить выбранную характеристику</button>
  
      <!-- Список добавленных характеристик -->
      <ul class="list-group mt-4">
        <li class="list-group-item" v-for="(char, index) in product.characteristics" :key="index">
          <strong>{{ char.name }}:</strong> {{ char.value }}
          <button @click="removeCharacteristic(index)" class="btn btn-danger btn-sm float-end">Удалить</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: 'Название товара',
          description: 'Описание товара',
          price: 0,
          characteristics: [], // Здесь будут храниться характеристики товара
        },
        availableCharacteristics: [
          { name: 'Характеристика 1' },
          { name: 'Характеристика 2' },
          { name: 'Характеристика 3' },
          // Добавьте здесь доступные характеристики
        ],
        selectedCharacteristic: null, // Выбранная характеристика
      };
    },
    methods: {
      addCharacteristic() {
        if (this.selectedCharacteristic) {
          // Добавьте выбранную характеристику к товару
          this.product.characteristics.push(this.selectedCharacteristic);
        }
      },
      removeCharacteristic(index) {
        // Здесь можно добавить логику удаления характеристики
        this.product.characteristics.splice(index, 1);
      },
    },
  };
  </script>
  