<template>
<div class="container">
    <div class="authorization">
    <p class="authorization__title">Авторизация</p>
    <input class="input" type="text" placeholder="Логин">
    <input class="input" type="text" placeholder="Пароль">
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
    margin-top: 20%;
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
    height: 25px;
    border: solid 1px rgb(26, 192, 178);
    border-radius: 5px;
}
.authorization__btn{
    border: none;
    background-color: aquamarine;
    padding: 6px 12px 6px 12px;
    max-width: 250px;
    align-self: center;
    font-family: Arial, Helvetica, sans-serif;

}
.authorization__title{
    margin-bottom: 40px;
}
</style>