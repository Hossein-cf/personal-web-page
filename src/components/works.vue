<template>
  <section id="works">
    <div class="min-h-max flex flex-col gap-5">
      <div>
        <h1 class="text-lightest-slate font-xl font-bold"><span
            class="text-green font-lg font-fira-code">03.</span> Some Things I've Built</h1>
      </div>
      <div class="flex">
        <div class="w-full">

          <div class="mb-3">
            <div class="card-container">
              <div class="box overlay">
                <div>
                  <div>
                    <h1 class="text-green font-fira-code font-xsm">Featured Project</h1>
                    <h1 class="text-lightest-slate font-xl font-bold">Financial Market Filter App</h1>
                    <p class="p-3 font-xsm text-align-justify rounded-[7px] bg-[var(--secondary)]">
                      Engineered a real-time financial data platform with a Vue.js + Tailwind CSS frontend and
                      Spring Boot reactive microservices (Project Reactor), processing 10K+ market events/second
                      in non-blocking streams. Boosted back-end throughput by 65% using Spring WebFlux and
                      virtual threads, slashing peak-load latency from ~1.2s to under 400ms. Architected
                      Dockerized modular microservices enabling zero-downtime deployments and auto-scaling
                      across 3+ nodes.</p>
                  </div>
                  <div class="border-none">
                    <ul class="ul-li-inline font-xsm">
                      <li>Java</li>
                      <li>Spring Boot</li>
                      <li>Project Reactor</li>
                      <li>Vue.js</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="card-container g-0">
              <div class="box overlay">
                <div>
                  <div>
                    <h1 class="text-green font-fira-code font-xsm">Featured Project</h1>
                    <h1 class="text-lightest-slate font-xl font-bold">Accounting Web App</h1>
                    <p class="p-3 font-xsm text-align-justify rounded-[7px] bg-[var(--secondary)]">
                      Architected a high-performance back-end for a web-based accounting system using Spring
                      Boot, Hibernate/JPA and PostgreSQL — powering a double-entry ledger, invoicing, inventory
                      management, reconciliations and ACID-compliant transactions. Built secure REST APIs with
                      Spring Security + JWT, granular RBAC and full audit logging for compliance. Dockerized for
                      zero-downtime deployments, with a responsive Vue.js + Bootstrap front-end.</p>
                  </div>
                  <div class="border-none">
                    <ul class="ul-li-inline font-xsm">
                      <li>Java</li>
                      <li>Spring Boot</li>
                      <li>Hibernate/JPA</li>
                      <li>PostgreSQL</li>
                      <li>Vue.js</li>
                    </ul>
                    <ul class="ul-li-inline font-lg text-lightest-slate">
                      <li>
                        <a class="anchor-color-white"
                           href="https://development.accounting.pargas-it.ir/">
                          <i class="pi pi-external-link"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="box right-0 overlay top-10">
                <img src="../assets/images/accounting-dashboard.png" class="max-w-full h-auto rounded-l"
                     alt="...">
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="card-container">
              <div class="box overlay">
                <div>
                  <div>
                    <h1 class="text-green font-fira-code font-xsm">Featured Project</h1>
                    <h1 class="text-lightest-slate font-xl font-bold">Merkato24 - Marketplace</h1>
                    <p class="p-3 font-xsm text-align-justify rounded-[7px] bg-[var(--secondary)]">
                      Architected a scalable backend with Java Spring Boot, microservices (Spring Cloud), and REST
                      APIs — supporting public, user, and admin panels (demo: Merkato24.com). Built core features:
                      multi-seller catalog, orders, payments, and real-time search/filtering via Elasticsearch +
                      PostgreSQL. Delivered a high-availability architecture with service discovery, API gateway,
                      and independent scaling, secured with JWT, granular RBAC, and audit logging.</p>
                  </div>
                  <div class="border-none">
                    <ul class="ul-li-inline font-xsm">
                      <li>Java</li>
                      <li>Spring Cloud</li>
                      <li>Elasticsearch</li>
                      <li>PostgreSQL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="card-container">
              <div class="box overlay">
                <div>
                  <div>
                    <h1 class="text-green font-fira-code font-xsm">Featured Project</h1>
                    <h1 class="text-lightest-slate font-xl font-bold">Modular Shopping Web App</h1>
                    <p class="p-3 font-xsm text-align-justify rounded-[7px] bg-[var(--secondary)]">
                      Architected a modular backend with Java Spring Boot and microservices (Spring Cloud). Built
                      secure REST APIs using JWT and granular RBAC (Spring Security). Managed data with
                      PostgreSQL and Spring Data JPA for reliable transactions, and enabled high availability via
                      service discovery, API gateway, and scalable design.</p>
                  </div>
                  <div class="border-none">
                    <ul class="ul-li-inline font-xsm">
                      <li>Java</li>
                      <li>Spring Boot</li>
                      <li>Spring Cloud</li>
                      <li>PostgreSQL</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="card-container g-0">
              <div class="box overlay">
                <div>
                  <div>
                    <h1 class="text-green font-fira-code font-xsm">Featured Project</h1>
                    <h1 class="text-lightest-slate font-xl font-bold">
                      Xui Panel Manager
                    </h1>
                    <p class="p-3 font-xsm text-align-justify rounded-[7px] bg-[var(--secondary)]">
                      Developed a centralized management system for 3X UI (Sanaei) panels using Java Spring Boot,
                      enabling unified monitoring, configuration, and real-time health tracking of multiple proxy
                      instances from a single dashboard. Implemented secure REST APIs and WebSocket-based live
                      metrics streaming, reducing administrative overhead by 70% and improving incident response
                      time. Integrated RBAC and audit logging for compliance and operational security in
                      multi-tenant environments.</p>
                  </div>
                  <div class="border-none">
                    <ul class="ul-li-inline font-xsm">
                      <li>Java</li>
                      <li>Spring Boot</li>
                      <li>WebSocket</li>
                      <li>RBAC</li>
                    </ul>
                    <ul class="ul-li-inline font-lg text-lightest-slate">
                      <li>
                        <a class="anchor-color-white"
                           href="https://github.com/mahdi-turrkk/x-ui-panel-manager">
                          <i class="pi pi-github"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="box right-0 overlay top-10">
                <img src="../assets/images/xui-dashboard.png" class="max-w-full h-auto"
                     alt="...">
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="card-container">
              <div class="box overlay">
                <div>
                  <div>
                    <h1 class="text-green font-fira-code font-xsm">Featured Project</h1>
                    <h1 class="text-lightest-slate font-xl font-bold">RTU Monitoring System</h1>
                    <p class="p-3 font-xsm text-align-justify rounded-[7px] bg-[var(--secondary)]">
                      Developed C++ firmware on ESP32 for RTU-based real-time fuel station monitoring (levels,
                      dispensers, alarms). Used SQLite for local persistent storage of telemetry and logs on
                      device, with sensor data acquisition, event detection, and reliable offline buffering.</p>
                  </div>
                  <div class="border-none">
                    <ul class="ul-li-inline font-xsm">
                      <li>C++</li>
                      <li>ESP32</li>
                      <li>SQLite</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-3">
            <div class="card-container">
              <div class="box overlay">
                <div>
                  <div>
                    <h1 class="text-green font-fira-code font-xsm">Featured Project</h1>
                    <h1 class="text-lightest-slate font-xl font-bold">Automated Bulk Order Execution Bot (ربات سرخط)</h1>
                    <p class="p-3 font-xsm text-align-justify rounded-[7px] bg-[var(--secondary)]">
                      Built a high-concurrency automated order execution system that submits bulk sell/buy orders
                      to brokerage endpoints within a tight, time-constrained execution window. Leveraged Java
                      Virtual Threads to parallelize order submission, maximizing throughput while minimizing
                      thread-management overhead compared to traditional thread pools, reliably dispatching a
                      large volume of concurrent orders as close to simultaneously as possible.</p>
                  </div>
                  <div class="border-none">
                    <ul class="ul-li-inline font-xsm">
                      <li>Java</li>
                      <li>Virtual Threads</li>
                      <li>Concurrency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
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

.card-container {
  background: transparent;
  position: relative;
  width: 100%;
}

</style>