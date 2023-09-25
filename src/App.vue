<template>
        <header_temp/>
        <main_temp/>
        <footer_temp/>
    
</template>

<script>
import  footer_temp  from "@/components/footer.vue";
import  header_temp  from "@/components/header.vue";
import  main_temp  from "@/components/main.vue";
import  auth  from "@/components/auth.vue";
import  admin  from "@/components/adminPage.vue";

export default {
    components: {
        auth,header_temp,footer_temp,main_temp, admin,
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

</style>