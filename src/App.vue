<template>
    <div class="container">
        <header_temp/>
        <main_temp/>
    </div>
    
</template>

<script>
import  footer_temp  from "@/components/footer.vue";
import  header_temp  from "@/components/header.vue";
import  main_temp  from "@/components/main.vue";
import  auth  from "@/components/auth.vue";
export default {
    components: {
        auth,header_temp,footer_temp,main_temp,
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