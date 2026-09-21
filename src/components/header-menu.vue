<template>
  <div class="header"
       :class="[{ 'is-hidden': !showHeader }, {'fixed top-0 left-0 right-0 z-50':showHeader}, {'box-shadow-none':disableBoxShadow}, {'box-shadow-show':!disableBoxShadow}]">
    <nav class="flex items-center flex-wrap lg:mx-4 pt-2"
         style="color: var(--light-slate);background: var(--nevy);">
      <div class="w-full px-4 flex items-center justify-between">
        <TransitionGroup name="fade" appear>
          <template v-if="showHeader">

            <a class="flex items-center" href="#">
              <img :src="logo" alt="" width="40" height="40">
            </a>
            <button class="md:hidden p-2" type="button" @click="mobileNavOpen = !mobileNavOpen"
                    aria-controls="navbarNav" :aria-expanded="mobileNavOpen" aria-label="Toggle navigation">
              <span class="block w-6 h-0.5 bg-light-slate mb-1"></span>
              <span class="block w-6 h-0.5 bg-light-slate mb-1"></span>
              <span class="block w-6 h-0.5 bg-light-slate"></span>
            </button>
          </template>

        </TransitionGroup>
        <div class="w-full md:w-auto links"
             :class="mobileNavOpen ? 'block' : 'hidden md:block'"
             id="navbarNav">
          <TransitionGroup name="list" appear>
            <ul v-if="showFooter" class="flex flex-col md:flex-row md:ml-auto mb-2 md:mb-0 gap-3">
              <li class="inline-block">
                <span class="font-fira-code text-green">01. </span>
                <a class="inline-block" aria-current="page" href="/#about">About</a>
              </li>
              <li class="inline-block">
                <span class="font-fira-code text-green">02. </span>
                <a class="inline-block" href="/#experience">Experience</a>
              </li>
              <li class="inline-block">
                <span class="font-fira-code text-green">03. </span>
                <a class="inline-block" href="/#works"> Work </a>
              </li>
              <li class="inline-block">
                <span class="font-fira-code text-green">04. </span>
                <a class="inline-block" href="/#contact">Contact
                </a>
              </li>
              <li class="inline-block">
                <router-link class="text-green font-fira-code inline-block"
                             style="border: 1px solid var(--green);border-radius: 3px;"
                             target="_blank"
                             :to="'/HosseinShakeriResume.pdf'"
                >Resume
                </router-link>
              </li>
            </ul>
          </TransitionGroup>
        </div>
      </div>
    </nav>
  </div>

</template>

<script setup lang="ts">
import logo from "@/assets/logo.svg"
import {onBeforeUnmount, onMounted, ref} from "vue";

const showFooter = ref(false);
const showHeader = ref(true);
const disableBoxShadow = ref(true);
const lastScrollPosition = ref(0);
const scrollOffset = ref(40);
const mobileNavOpen = ref(false);
onMounted(() => {
  lastScrollPosition.value = window.pageYOffset;
  window.addEventListener('scroll', onScroll)

  setTimeout(() => {
    showFooter.value = true;
  }, 500)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)

})

function onScroll() {
  if (window.pageYOffset < 0) {
    return;
  }
  if (Math.abs(window.pageYOffset - lastScrollPosition.value) < scrollOffset.value) {
    return;
  }
  disableBoxShadow.value = window.pageYOffset < 40;

  showHeader.value = window.pageYOffset < lastScrollPosition.value;
  lastScrollPosition.value = window.pageYOffset;

}
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translatey(30px);
}


.header {
  transform: translateY(0);
  transition: transform 300ms linear;
}

.box-shadow-none {
  box-shadow: none !important;
}

.box-shadow-show {
  box-shadow: 0 10px 30px -10px var(--nevy-shadow) !important;

}

.header.is-hidden {

  transform: translateY(-100%);
}
</style>