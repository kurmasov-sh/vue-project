<template>
<div class="container">
    <div class="authorization">
    <p>Авторизация</p>
    <input class="input" type="text">
    <input class="input" type="text">
    <button class="authorization__btn">Авторизация</button>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
.container{
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
}
.authorization{
    text-align: center;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.input{
    margin-bottom: 20px;
}
.authorization__btn{
    width: 50%;
    align-self: center;
}
</style>