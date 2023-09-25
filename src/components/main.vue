<template>
<div class="container">
        <h2 class="mt-5 mb-4">Каталог продуктов</h2>
        <div class="row" >
            <!-- Продукт 1 -->
            <div class="col-md-3 mb-4" v-for="product in products">
                <div class="card">
                    <!-- Изображение товара -->
                    <img :src="item_path" class="card-img-top" alt="Продукт 1">
                    <div class="card-body">
                        <!-- Название товара -->
                        <h5 class="card-title">{{product.name}}</h5>
                        <!-- Цена товара -->
                        <p class="card-text">{{product.price}}</p>
                        <!-- Кнопка "Добавить в корзину" -->
                        <a href="#" class="btn btn-primary">Добавить в корзину</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            item_path:'/images/product-item_img2.jpg',
            products: [
                {
                    name: 'Товар 1',
                    description: 'Описание товара 1',
                    price: '1000 р.'
                },
                {
                    name: 'Товар 2',
                    description: 'Описание товара 1',
                    price: '1000 р.'
                },
                {
                    name: 'Товар 3',
                    description: 'Описание товара 1',
                    price: '1000 р.'
                },
                {
                    name: 'Товар 4',
                    description: 'Описание товара 1',
                    price: '1000 р.'
                },
                {
                    name: 'Товар 4',
                    description: 'Описание товара 1',
                    price: '1000 р.'
                }
            ],
            busket: [
                {
                    
                }
            ]
            
        }
        
    }
}
</script>

<style>

</style>