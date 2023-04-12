<template>
    <div >
        <header>
            <HeaderMenu/>
        </header>

        <router-view></router-view>


    </div>
</template>

<script setup>

import Footer from "@/components/footer.vue";
import HeaderMenu from "@/components/header-menu.vue";
</script>

<style scoped>

</style>