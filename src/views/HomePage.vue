<template>
  <div id="content">
    <main>
      <Introduction/>
      <AboutMe/>
      <Experience/>
      <Works/>
      <Contact/>


    </main>
  </div>
</template>

<script setup lang="ts">

import HeaderMenu from "@/components/header-menu.vue";
import Introduction from "@/components/introduction.vue";
import AboutMe from "@/components/about-me.vue";
import Experience from "@/components/experience.vue";
import Works from "@/components/works.vue";
import Contact from "@/components/contact.vue";
</script>
