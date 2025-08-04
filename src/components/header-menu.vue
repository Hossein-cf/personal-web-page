<template>
    <div class=" header "
         :class="[{ 'is-hidden': !showHeader },{'fixed-top':showHeader},{'box-shadow-none':disableBoxShadow},{'box-shadow-show':!disableBoxShadow}]">
        <nav class="navbar navbar-expand-md ms-lg-4 me-lg-4 pt-2"
             style="color: var(--light-slate);background: var(--nevy);">
            <div class="container-fluid">
                <TransitionGroup name="fade" appear>
                    <template v-if="showHeader">

                        <a class=" navbar-brand" href="#">
                            <img :src="logo" alt="" width="40" height="40">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </template>

                </TransitionGroup>
                <div class=" collapse navbar-collapse links" id="navbarNav">
                    <TransitionGroup name="list" appear>
                        <ul v-if="showFooter" class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li class="nav-item ">
                                <span class="font-fira-code text-info">01. </span>
                                <a class="nav-link d-inline-block" aria-current="page" href="/#about">About</a>
                            </li>
                            <li class="nav-item">
                                <span class="font-fira-code text-info">02. </span>
                                <a class="nav-link d-inline-block " href="/#experience">Experience</a>
                            </li>
                            <li class="nav-item ">
                                <span class="font-fira-code text-info">03. </span>
                                <a class="nav-link d-inline-block " href="/#works"> Work </a>
                            </li>
                            <li class="nav-item ">
                                <span class="font-fira-code text-info">04. </span>
                                <a class="nav-link   d-inline-block" href="/#contact">Contact
                                </a>
                            </li>
                            <li class="nav-item d-inline-block">
                                <router-link class="nav-link text-info font-fira-code"
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
    /*box-shadow: 0 10px 30px -10px var(--nevy-shadow);*/
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