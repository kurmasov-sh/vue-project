<template>
<div class="container">
        <h2 class="mt-5 mb-4">Каталог продуктов</h2>
        <div class="row">
            <!-- Продукт 1 -->
            <div class="col-md-3 mb-4">
                <div class="card">
                    <!-- Изображение товара -->
                    <img :src="item_path" class="card-img-top" alt="Продукт 1">
                    <div class="card-body">
                        <!-- Название товара -->
                        <h5 class="card-title">Продукт 1</h5>
                        <!-- Цена товара -->
                        <p class="card-text">Цена: $20.00</p>
                        <!-- Кнопка "Добавить в корзину" -->
                        <a href="#" class="btn btn-primary">Добавить в корзину</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-4">
                <div class="card">
                    <!-- Изображение товара -->
                    <img :src="item_path" class="card-img-top" alt="Продукт 1">
                    <div class="card-body">
                        <!-- Название товара -->
                        <h5 class="card-title">Продукт 1</h5>
                        <!-- Цена товара -->
                        <p class="card-text">Цена: $20.00</p>
                        <!-- Кнопка "Добавить в корзину" -->
                        <a href="#" class="btn btn-primary">Добавить в корзину</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-4">
                <div class="card">
                    <!-- Изображение товара -->
                    <img :src="item_path" class="card-img-top" alt="Продукт 1">
                    <div class="card-body">
                        <!-- Название товара -->
                        <h5 class="card-title">Продукт 1</h5>
                        <!-- Цена товара -->
                        <p class="card-text">Цена: $20.00</p>
                        <!-- Кнопка "Добавить в корзину" -->
                        <a href="#" class="btn btn-primary">Добавить в корзину</a>
                    </div>
                </div>
            </div>

            <div class="col-md-3 mb-4">
                <div class="card">
                    <!-- Изображение товара -->
                    <img :src="item_path" class="card-img-top" alt="Продукт 1">
                    <div class="card-body">
                        <!-- Название товара -->
                        <h5 class="card-title">Продукт 1</h5>
                        <!-- Цена товара -->
                        <p class="card-text">Цена: $20.00</p>
                        <!-- Кнопка "Добавить в корзину" -->
                        <a href="#" class="btn btn-primary">Добавить в корзину</a>
                    </div>
                </div>
            </div>
            <div class="col-md-3 mb-4">
                <div class="card">
                    <!-- Изображение товара -->
                    <img :src="item_path" class="card-img-top" alt="Продукт 1">
                    <div class="card-body">
                        <!-- Название товара -->
                        <h5 class="card-title">Продукт 1</h5>
                        <!-- Цена товара -->
                        <p class="card-text">Цена: $20.00</p>
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
        }
    }
}
</script>

<style>

</style>