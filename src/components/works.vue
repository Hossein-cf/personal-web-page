<template>
    <section id="works">
        <div style="min-height: 70vh" class="vstack gap-5">
            <div>
                <h1 class="text-lightest-slate font-xl fw-bold "><span
                        class="text-info font-lg font-fira-code">03.</span> Some Things I’ve Built</h1>
            </div>
            <div class="hstack">
                <div style="width: 100%">
                    <div class="mb-3 ">
                        <div class="card-container  g-0">
                            <div class="box" style="width: 50%">
                                <img src="../assets/image.jpg" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class=" text-end box overlay">
                                <div>

                                    <div>
                                        <h1 class="text-info font-fira-code font-xsm">Featured Project</h1>
                                        <h1 style="color: var(--lightest-slate)" class="font-xl fw-bold">Accounting Web
                                            App</h1>

                                        <p class="p-3 font-xsm"
                                           style=";border-radius: 7px; background: var(--bs-secondary)">The accounting
                                            application I developed is a comprehensive tool that helps businesses manage
                                            their financial transactions. It includes features such as invoicing,
                                            payment processing, and inventory management, which provide businesses with
                                            a complete solution for their accounting needs. With this application,
                                            businesses can create professional invoices, securely process payments, and
                                            track their inventory levels.</p>

                                    </div>
                                    <div class="border-none ">
                                        <ul class="ul-li-inline font-xsm ">
                                            <li>DotNet core</li>
                                            <li>EF core</li>
                                            <li>Vue.js</li>
                                            <li>TypeScript</li>
                                            <li>Html & CSS & Js</li>
                                        </ul>
                                        <ul class="ul-li-inline font-lg" style="color: var(--lightest-slate)">

                                            <li>
                                                <a class="anchor-color-white"
                                                   href="https://development.accounting.pargas-it.ir/">
                                                    <i class="bi bi-box-arrow-up-right "/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
<!--        <div class="vstack gap-5">-->
<!--            <div class="text-center">-->
<!--                <h1 class="text-lightest-slate font-xl fw-bold">Other Noteworthy Projects</h1>-->
<!--                <router-link to="#" class="text-info text-decoration-none font-fira-code font-xsm">-->
<!--                    view the archive-->
<!--                </router-link>-->
<!--            </div>-->
<!--            <div class="row">-->
<!--                <div v-for="i in 6" :key="i" class="col-12 col-md-6 col-lg-4 project">-->
<!--                    <div class="card bg-secondary mb-3">-->
<!--                        <div class="card-header">-->
<!--                            <div class="hstack gap-2">-->
<!--                                <div>-->
<!--                                    <i class="bi bi-folder  text-info font-xxxl"/>-->
<!--                                </div>-->
<!--                                <div class="ms-auto hstack gap-2 font-md">-->
<!--                                    <i class="bi bi-github"/>-->
<!--                                    <i class="bi bi-box-arrow-up-right "/>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="card-body">-->
<!--                            <h1 class="card-title font-lg fw-bold">Time to Have More Fan</h1>-->
<!--                            <p class="card-text font-sm">A single page web app for helping me choose where to travel,-->
<!--                                built with-->
<!--                                Next.js,-->
<!--                                Firebase, and Tailwind CSS</p>-->
<!--                        </div>-->
<!--                        <div class="card-footer">-->
<!--                            <ul class="p-0 font-xsm">-->
<!--                                <li class="d-inline-block me-2">Next.js</li>-->
<!--                                <li class="d-inline-block me-2">Tailwind CSS</li>-->
<!--                                <li class="d-inline-block me-2">Firebase</li>-->
<!--                            </ul>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

    </section>
</template>

<script setup>

</script>

<style scoped>

.ul-li-inline {
    padding: 0;
}

.ul-li-inline > li {
    margin-left: 1rem;
    display: inline-block;
}

/*.ul-li-inline>li::after{*/
/*  content: ',';*/
/*}*/

.card-container {
    background: transparent;
    position: relative;
    width: 100%;
    height: 400px;
    /*margin: 30px;*/
    /*border: 1px solid red;*/
}

.box {
    position: absolute;

}

.overlay {
    z-index: 10;
    right: 0;
    width: 60%
}


</style>