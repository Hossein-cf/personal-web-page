<template>
    <div class="fixed-top ">
        <nav class="navbar navbar-expand-md ms-5 me-5 pt-3" style="color: var(--light-slate); background: var(--nevy)">
            <div class="container-fluid">
                <a class=" navbar-brand" href="#">
                    <img :src="logo" alt="" width="40" height="40">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class=" collapse navbar-collapse links" id="navbarNav">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                        <li class="nav-item ">
                            <span class="font-fira-code text-info">01. </span>
                            <a class="nav-link d-inline-block" aria-current="page" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <span class="font-fira-code text-info">02. </span>
                            <a class="nav-link d-inline-block " href="#experience">Experience</a>
                        </li>
                        <li class="nav-item ">
                            <span class="font-fira-code text-info">03. </span>
                            <a class="nav-link d-inline-block " href="#works"> Work </a>
                        </li>
                        <li class="nav-item ">
                            <span class="font-fira-code text-info">04. </span>
                            <a class="nav-link   d-inline-block" href="#contact">Contact</a>
                        </li>
                        <li class="nav-item d-inline-block">
                            <a class="nav-link text-info font-fira-code"
                               style="border: 1px solid var(--green);border-radius: 3px;"
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