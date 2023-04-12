<template>
    <div class="fixed-top">
        <nav class="navbar navbar-expand-md" style="color: var(--light-slate); background: var(--nevy)">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img :src="logo" alt="" width="40" height="40">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse links" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item ">
                            <a class="nav-link active " aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#experience">Experience</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link  " href="#works"> Work </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link   " href="#contact">Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-info " style="border: 1px solid var(--green);border-radius: 3px;"
                               href="#">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    </div>

</template>

<script setup lang="ts">
import logo from "@/assets/logo.svg"
</script>

<style scoped>

</style>