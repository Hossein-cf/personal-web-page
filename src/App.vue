<template>
  <div v-if="!showMainContent" class="flex items-center justify-center h-screen bg-[#020c1b]">
    <Transition name="bounce">
      <div v-if="loaderVisible">
        <GridLoader :color="'#64FFDA'"/>
      </div>
    </Transition>
  </div>

  <div v-if="showMainContent">
    <Main>
    </Main>
  </div>
</template>
<script setup lang="ts">
import Main from "@/layout/main.vue";
import {onMounted, ref} from "vue";
import GridLoader from "@/components/Animation/GridLoader.vue";

const showMainContent = ref(false)
const loaderVisible = ref(true);

window.onload = function () {
  console.log('loading resource finished')
  setTimeout(() => {
    loaderVisible.value = false;
    setTimeout(() => {
      showMainContent.value = true;
    }, 500)
  }, 1000)
}
</script>