<template>

    <div class="d-none d-md-block fixed-bottom-left contact links">
        <div>
            <SocialMediaIcons/>
        </div>
    </div>
    <div class=" d-none d-md-block fixed-bottom-right contact links">
        <div>
            <a href="mailto:h.shaker2001@gmail.com ">
                h.shaker2001@gmail.com
            </a>
        </div>
    </div>
    <div style="background: var(--nevy); height: 2.5rem;">
        <div class="text-center ">
            <SocialMediaIcons class=" d-flex flex-row d-md-none align-items-center justify-content-center gap-3 links"/>
            <div>
                Built by Hossein Shakeri
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import SocialMediaIcons from "@/components/social-media-icons.vue";
</script>

<style scoped>


.fixed-bottom-left {
    position: fixed;
    bottom: 0;
    right: auto;
    left: 40px;
    z-index: 10;
}

.fixed-bottom-right {
    position: fixed;
    bottom: 0;
    right: 40px;
    left: auto;
    z-index: 10;
}

.contact {
    width: 40px;
}

.contact a {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    margin: 10px auto;

}


.contact div {
    display: flex;
    flex-direction: column;
}

.contact div::after {
    content: "";
    display: block;
    height: 100px;
    width: 1px;
    margin: auto;
    background-color: var(--light-slate);
}

ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style: none;
}


</style>