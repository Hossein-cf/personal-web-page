<template>
  <section id="about">
    <div class="min-h-screen flex justify-between items-center flex-col md:flex-row">
      <div class="max-w-[850px] text-left">
        <div>
          <h1 class="text-lightest-slate font-xl font-bold"><span
              class="text-green font-lg font-fira-code">01.</span> About Me</h1>
        </div>
        <div class="font-md text-align-justify">
          <p>
            My name is Hossein, and I was born in 2001. In 2018, I started studying computer engineering at
            the university, and soon after, I began my journey into programming. My first programming
            language was Java — and I never really left it.
          </p>
          <p>
            Over the past 4+ years I've focused on backend and full-stack development, building Java Spring
            Boot microservices for real-time financial platforms, event-driven systems with Kafka, and
            security layers with DDD-based RBAC. I've delivered platforms processing 10K+ events per second
            and search systems serving 50K+ daily queries at sub-200ms latency. On the front-end side I build
            with Vue.js, and I'm always exploring ways to write cleaner, more reactive, more resilient systems.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
          </p>
        </div>
        <ul class="font-sm text-align-justify">
          <li>Java</li>
          <li>Spring Boot</li>
          <li>Microservices</li>
          <li>Apache Kafka</li>
          <li>PostgreSQL</li>
          <li>Elasticsearch</li>
          <li>Redis</li>
          <li>Docker</li>
          <li>Vue.js</li>
          <li>TypeScript</li>
        </ul>
        <br/>
        <p class="font-md text-align-justify">
          As a developer, I am passionate about creating clean, functional, and scalable applications. I am
          constantly learning and exploring new technologies and approaches to stay up to date with the
          latest industry trends. I enjoy working on challenging, high-throughput projects that push me to
          expand my skills and abilities. If you're looking for a dedicated and skilled developer, I'm here
          to help!
        </p>

      </div>

    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
}

li:before {
  content: "▹";
  color: var(--green);
  margin-right: 0.5rem;
}


</style>