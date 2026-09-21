<template>
  <div class="flex flex-col">
    <div class="h-[5vh]">
      <HeaderMenu/>
    </div>
    <RouterView/>
    <div class="h-[5vh]">
      <Footer/>
    </div>
  </div>

</template>

<script setup>

import Footer from "@/components/footer.vue";
import HeaderMenu from "@/components/header-menu.vue";
</script>