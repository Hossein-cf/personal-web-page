<template>
    <header>
        <HeaderMenu/>
    </header>

    <router-view></router-view>
    <footer>
        <Footer/>
    </footer>
</template>

<script setup>

import Footer from "@/components/footer.vue";
import HeaderMenu from "@/components/header-menu.vue";
</script>

<style scoped>

</style>