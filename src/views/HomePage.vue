<template>
    <main>
        <transition name="fade" appear>
            <section v-if="animateSections[0]||true" ref="sectionRefs1">
                <Introduction/>
            </section>
        </Transition>
        <transition name="fade">
            <section v-if="animateSections[1]||true" ref="sectionRefs2">
                <AboutMe/>
            </section>
        </Transition>
        <transition name="fade">
            <section v-if="animateSections[2] ||true" ref="sectionRefs3">
                <Experience/>
            </section>
        </Transition>
        <transition name="fade" appear>
            <section v-if="animateSections[3] ||true" ref="sectionRefs4">
                <Works/>
            </section>
        </Transition>
        <transition name="fade" appear>
            <section v-if="animateSections[4]||true" ref="sectionRefs5">
                <Contact/>
            </section>
        </Transition>
    </main>
</template>

<script setup lang="ts">

import Introduction from "@/components/introduction.vue";
import AboutMe from "@/components/about-me.vue";
import Experience from "@/components/experience.vue";
import Works from "@/components/works.vue";
import Contact from "@/components/contact.vue";
import Footer from "@/components/footer.vue";
import {onMounted, ref} from "vue";


const animateSections = ref([false, false, false, false, false]);
const sectionRefs1 = ref(null);
const sectionRefs2 = ref(null);
const sectionRefs3 = ref(null);
const sectionRefs4 = ref(null);
const sectionRefs5 = ref(null);
const sectionRefs = ref([null, null, null, null, null]);

function handleScroll() {
    const viewportHeight = window.innerHeight;
    sectionRefs
    sectionRefs1
    debugger
    const sectionRect1 = sectionRefs1.value.getBoundingClientRect();

    if (sectionRect1.top < viewportHeight && sectionRect1.bottom >= 0) {
        animateSections.value[0] = true;
    }

    const sectionRect2 = sectionRefs2.value.getBoundingClientRect();

    if (sectionRect2.top < viewportHeight && sectionRect2.bottom >= 0) {
        animateSections.value[0] = true;
    }

    const sectionRect3 = sectionRefs3.value.getBoundingClientRect();

    if (sectionRect3.top < viewportHeight && sectionRect3.bottom >= 0) {
        animateSections.value[0] = true;
    }

    const sectionRect4 = sectionRefs4.value.getBoundingClientRect();

    if (sectionRect4.top < viewportHeight && sectionRect4.bottom >= 0) {
        animateSections.value[0] = true;
    }

    const sectionRect5 = sectionRefs5.value.getBoundingClientRect();

    if (sectionRect5.top < viewportHeight && sectionRect5.bottom >= 0) {
        animateSections.value[0] = true;
    }

    // sectionRefs.value.forEach((section, index) => {
    //     const sectionRect = section.getBoundingClientRect();
    //
    //     if (sectionRect.top < viewportHeight && sectionRect.bottom >= 0) {
    //         animateSections.value[index] = true;
    //     }
    // });
}

onMounted(() => {

    window.addEventListener('scroll', handleScroll);
})
</script>
