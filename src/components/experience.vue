<template>
  <section id="experience">
    <div class="min-h-screen flex items-center py-20">
      <div class="max-w-[850px] text-left">
        <h1 class="text-lightest-slate font-xl font-bold mb-10"><span
            class="text-green font-lg font-fira-code">02.</span> Where
          I've Worked</h1>

        <div class="relative border-l-2 border-slate/30 pl-8 flex flex-col gap-12">

          <div class="relative">
            <span class="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-green"></span>
            <div class="flex flex-wrap items-baseline gap-x-3 mb-1">
              <h1 class="font-lg font-bold text-lightest-slate">Backend Developer</h1>
              <span class="font-md text-green font-fira-code">@ Zanjiretamin</span>
            </div>
            <span class="inline-block font-xsm font-fira-code text-slate mb-4">April 2025 - Present</span>
            <ul class="font-md text-align-justify flex flex-col gap-2">
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Designed event-driven microservices using Apache Kafka, decoupling services and improving asynchronous message reliability.</li>
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Applied Event Sourcing to persist domain state as immutable events, improving auditability and state consistency.</li>
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Applied the Strategy pattern to encapsulate business logic, reducing complexity and improving extensibility.</li>
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Built scalable Java/Spring Boot microservices supporting high-traffic, high-concurrency workloads.</li>
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Optimized Kafka-based pipelines and inter-service communication to improve throughput and reduce latency.</li>
            </ul>
          </div>

          <div class="relative">
            <span class="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-green"></span>
            <div class="flex flex-wrap items-baseline gap-x-3 mb-1">
              <h1 class="font-lg font-bold text-lightest-slate">Full-Stack Developer</h1>
              <span class="font-md text-green font-fira-code">@ BonyanFan</span>
            </div>
            <span class="inline-block font-xsm font-fira-code text-slate mb-4">Feb 2024 - Sep 2025</span>
            <ul class="font-md text-align-justify flex flex-col gap-2">
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Built responsive, user-friendly interfaces for a large-scale accounting web app.</li>
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Developed modular Vue.js components and optimized UI performance.</li>
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Ensured cross-browser compatibility and mobile responsiveness using Bootstrap.</li>
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Collaborated with product and back-end teams to deliver reliable, scalable features.</li>
            </ul>
          </div>

          <div class="relative">
            <span class="absolute -left-[38px] top-1 w-3 h-3 rounded-full bg-green"></span>
            <div class="flex flex-wrap items-baseline gap-x-3 mb-1">
              <h1 class="font-lg font-bold text-lightest-slate">Backend Developer</h1>
              <span class="font-md text-green font-fira-code">@ Dornatech</span>
            </div>
            <span class="inline-block font-xsm font-fira-code text-slate mb-4">July 2022 - Jan 2024</span>
            <ul class="font-md text-align-justify flex flex-col gap-2">
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Architected a DDD-based RBAC security layer (Role-Resource-Domain model) in Spring Boot, enabling context-bound, tenant-specific permissions for 15+ roles across 30+ bounded contexts and eliminating all misconfigurations.</li>
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Implemented Elasticsearch search, cutting latency from 1.8s to &lt;200ms for 50K+ daily queries at 99.9% uptime.</li>
              <li class="flex gap-2"><span class="text-green shrink-0">▹</span>Built scalable Java microservices (Spring Boot + Docker), supporting 10K+ concurrent users.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>

  </section>
</template>

<script setup>

</script>