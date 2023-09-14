<template>
<div class="item">
    <div class="item__img">
        <img  class="img" :src="item_path" alt="">
    </div>
    <div class="item__title">Имя товара</div>
    <div class="item__desc">Описание товара</div>
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
.item{
    width: 200px;
    border: solid, 2px, green;
}
.item__img{
    height: 150px;
    width: 150px;
}
.img{
    width: 100%;
}
</style>