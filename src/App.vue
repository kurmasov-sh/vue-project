<template>
        <header_temp/>
        <router-view></router-view>
        <router-link to="/auth">123</router-link>
        <footer_temp/>
    
</template>

<script>
import  footer_temp  from "@/components/footer.vue";
import  header_temp  from "@/components/header.vue";
import  main_temp  from "@/components/main.vue";
import  auth  from "@/components/auth.vue";
import  admin  from "@/components/adminPage.vue";
import detail from "@/components/detail.vue";
export default {
    components: {
        auth,header_temp,footer_temp,main_temp, admin, detail,
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>
*{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;

}
.main-container {
    min-height: 100vh;
}

</style>