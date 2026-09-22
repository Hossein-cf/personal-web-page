<template>
  <div class="header"
       :class="[{ 'is-hidden': !showHeader }, {'fixed top-0 left-0 right-0 z-50':showHeader}, {'box-shadow-none':disableBoxShadow}, {'box-shadow-show':!disableBoxShadow}]"
       style="background: var(--nevy);">
    <nav class="flex flex-col md:flex-row lg:mx-4 pt-2"
         style="color: var(--light-slate);">
      <div class="w-full px-4 md:px-8 flex items-center justify-between h-14 md:h-20">
        <TransitionGroup name="fade" appear>
          <template v-if="showHeader" :key="'logo-row'">

            <a class="flex items-center" href="#" @click.prevent="scrollToSection('introduction')">
              <img :src="logo" alt="" width="40" height="40">
            </a>
            <button class="md:hidden p-2 relative z-[60]" type="button" @click="mobileNavOpen = !mobileNavOpen"
                    aria-controls="navbarNav" :aria-expanded="mobileNavOpen" aria-label="Toggle navigation">
              <span class="block w-6 h-0.5 bg-light-slate mb-1.5 transition-transform"
                    :class="{ 'rotate-45 translate-y-2': mobileNavOpen }"></span>
              <span class="block w-6 h-0.5 bg-light-slate mb-1.5 transition-opacity"
                    :class="{ 'opacity-0': mobileNavOpen }"></span>
              <span class="block w-6 h-0.5 bg-light-slate transition-transform"
                    :class="{ '-rotate-45 -translate-y-2': mobileNavOpen }"></span>
            </button>
          </template>

        </TransitionGroup>
      </div>

      <!-- mobile backdrop -->
      <Transition name="fade">
        <div v-if="mobileNavOpen" class="md:hidden fixed inset-0 bg-black/60 z-40"
             @click="mobileNavOpen = false"></div>
      </Transition>

      <!-- mobile slide-in panel -->
      <Transition name="slide">
        <div v-if="mobileNavOpen"
             class="md:hidden fixed top-0 right-0 h-screen w-[75vw] max-w-[320px] z-50 flex flex-col pt-20 px-8"
             style="background: var(--nevy);">
          <ul class="flex flex-col gap-6">
            <li>
              <a class="flex items-baseline gap-3 font-lg" href="#about" @click.prevent="scrollToSection('about')">
                <span class="font-fira-code text-green font-sm">01.</span> About
              </a>
            </li>
            <li>
              <a class="flex items-baseline gap-3 font-lg" href="#experience"
                 @click.prevent="scrollToSection('experience')">
                <span class="font-fira-code text-green font-sm">02.</span> Experience
              </a>
            </li>
            <li>
              <a class="flex items-baseline gap-3 font-lg" href="#works" @click.prevent="scrollToSection('works')">
                <span class="font-fira-code text-green font-sm">03.</span> Work
              </a>
            </li>
            <li>
              <a class="flex items-baseline gap-3 font-lg" href="#contact" @click.prevent="scrollToSection('contact')">
                <span class="font-fira-code text-green font-sm">04.</span> Contact
              </a>
            </li>
          </ul>
          <router-link class="text-green font-fira-code text-center mt-10 py-3 rounded"
                       style="border: 1px solid var(--green);"
                       target="_blank"
                       :to="'/HosseinShakeriResume.pdf'"
                       @click="mobileNavOpen = false"
          >Resume
          </router-link>
        </div>
      </Transition>

      <!-- desktop inline nav -->
      <div class="hidden md:block w-full links" id="navbarNav">
        <TransitionGroup name="list" appear>
          <ul v-if="showFooter" class="flex md:flex-row md:justify-end items-center px-4 md:px-8 gap-8 py-2">
            <li class="group">
              <a class="flex items-baseline gap-1.5 relative py-1" aria-current="page" href="#about"
                 @click.prevent="scrollToSection('about')">
                <span class="font-fira-code text-green font-sm">01.</span>
                <span class="transition-colors group-hover:text-green">About</span>
                <span class="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-green transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li class="group">
              <a class="flex items-baseline gap-1.5 relative py-1" href="#experience"
                 @click.prevent="scrollToSection('experience')">
                <span class="font-fira-code text-green font-sm">02.</span>
                <span class="transition-colors group-hover:text-green">Experience</span>
                <span class="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-green transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li class="group">
              <a class="flex items-baseline gap-1.5 relative py-1" href="#works"
                 @click.prevent="scrollToSection('works')">
                <span class="font-fira-code text-green font-sm">03.</span>
                <span class="transition-colors group-hover:text-green">Work</span>
                <span class="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-green transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li class="group">
              <a class="flex items-baseline gap-1.5 relative py-1" href="#contact"
                 @click.prevent="scrollToSection('contact')">
                <span class="font-fira-code text-green font-sm">04.</span>
                <span class="transition-colors group-hover:text-green">Contact</span>
                <span class="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-green transition-all group-hover:w-full"></span>
              </a>
            </li>
            <li class="ml-2">
              <router-link
                  class="text-green font-fira-code inline-block px-4 py-2 rounded transition-colors hover:bg-green hover:!text-navy"
                  style="border: 1px solid var(--green);"
                  target="_blank"
                  :to="'/HosseinShakeriResume.pdf'"
              >Resume
              </router-link>
            </li>
          </ul>
        </TransitionGroup>
      </div>
    </nav>
  </div>

</template>

<script setup lang="ts">
import logo from "@/assets/logo.svg"
import {onBeforeUnmount, onMounted, ref, watch} from "vue";

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

watch(mobileNavOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
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

function scrollToSection(id: string) {
  mobileNavOpen.value = false;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
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

.slide-enter-active,
.slide-leave-active {
  transition: transform 300ms ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
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

html {
  scroll-behavior: smooth;
}
</style>