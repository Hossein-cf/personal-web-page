<template>
  <div class="vstack" style="min-height: 100vh;">
    <div style="position: sticky">
      <HeaderMenu/>
    </div>
    <slot/>
    <div class="mt-auto">
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