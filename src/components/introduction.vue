<template>
  <section id="introduction">
    <div class="min-h-screen flex items-center">
      <div class="text-left w-full">
        <div>
          <h1 class="text-green font-fira-code font-md">Hi, my name is</h1>
          <h1 class="text-lightest-slate h1-xxl">Hossein Shakeri.</h1>
          <h1 class="text-slate font-bold text-lg leading-snug sm:whitespace-nowrap sm:text-2xl md:text-4xl lg:text-5xl">I build scalable backend & full-stack systems.</h1>
          <p class="max-w-[500px] text-align-justify font-md mt-4">
            I'm a full-stack developer with <span class="text-green font-bold">4+</span> years of
            experience delivering real-time financial platforms processing
            <span class="text-green font-bold">10K+</span> events/second. I specialize in
            <span class="text-green uppercase">Java Spring Boot</span> microservices,
            reactive systems, and DDD-based security, backed by front-ends built with
            <span class="text-green uppercase">Vue.js</span>. Recent stack includes
            <span class="text-green uppercase">Kafka</span>,
            <span class="text-green uppercase">Elasticsearch</span>,
            <span class="text-green uppercase">PostgreSQL</span>, and
            <span class="text-green uppercase">Docker</span>.
          </p>
        </div>
        <div class="mt-6 flex gap-4 flex-wrap">
          <a href="mailto:h.shaker2001@gmail.com ">
            <button class="font-fira-code border border-green text-green px-5 py-2.5 rounded hover:bg-green hover:text-navy transition-colors">contact me</button>
          </a>
          <router-link target="_blank" :to="'/HosseinShakeriResume.pdf'">
            <button class="font-fira-code text-lightest-slate px-5 py-2.5 rounded hover:text-green transition-colors">view resume →</button>
          </router-link>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

</script>