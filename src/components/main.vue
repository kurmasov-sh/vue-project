<template>
<div class="container main-container">
        <h2 class="mt-5 mb-4">Каталог продуктов</h2>
        <div class="row" >
            <!-- Продукт 1 -->
            <div class="col-md-3 mb-4" v-for="product in products" :key="product.id">
                <div class="card">
                    <!-- Изображение товара -->
                    <img :src="item_path" class="card-img-top" alt="Продукт 1">
                    <div class="card-body">
                        <!-- Название товара -->
                        <h5 class="card-title">{{product.name}}</h5>
                        <!-- Цена товара -->
                        <p class="card-text">{{product.price}}</p>
                        <!-- Кнопка "Добавить в корзину" -->
                        <router-link :to="{ name: 'detail', params: {id: product.id, name: product.name, description: product.description, price:product.price } }" class="btn btn-primary">Купить</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions  } from 'vuex'
import axios from 'axios';
import store from '@/store';
export default {
    data() {
        return {
            item_path:'/images/product-item_img2.jpg',
            products: [],
        }
        
    },
    methods: {
        ...mapMutations([
            'addItem'
        ]),
        ...mapActions([
            'getPosts'
        ]),
        addToCart() {
            store.commit('addItem', 'картошка');
            store.dispatch('addItem');
        }
    },
    mounted () {
    axios.get('/bd')
  .then(response => {
    // Обработка данных из ответа
    this.products = response.data;
    // Используйте данные в вашем приложении
  })
  .catch(error => {
    console.error('Ошибка при получении данных:', error);
  });
}

}

</script>

<style>
.main-container {
    min-height: 100vh;
}
</style>