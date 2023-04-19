<template>
    <div class="d-flex flex-column">
        <div style="height: 5vh">
            <HeaderMenu/>
        </div>
            <RouterView/>
        <div style="height: 5vh">
            <Footer/>
        </div>
    </div>

</template>

<script setup>

import Footer from "@/components/footer.vue";
import HeaderMenu from "@/components/header-menu.vue";
</script>

<style scoped>

</style>