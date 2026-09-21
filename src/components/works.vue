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
                    <h1 class="text-lightest-slate font-xl font-bold">Accounting Web
                      App</h1>

                    <p class="p-3 font-xsm text-align-justify rounded-[7px] bg-[var(--secondary)]">
                      The accounting
                      application I developed is a comprehensive tool that helps businesses manage
                      their financial transactions. It includes features such as invoicing,
                      payment processing, and inventory management, which provide businesses with
                      a complete solution for their accounting needs. With this application,
                      businesses can create professional invoices, securely process payments, and
                      track their inventory levels.</p>

                  </div>
                  <div class="border-none">
                    <ul class="ul-li-inline font-xsm">
                      <li>DotNet core</li>
                      <li>EF core</li>
                      <li>Vue.js</li>
                      <li>TypeScript</li>
                      <li>Html & CSS & Js</li>
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
                    <h1 class="text-lightest-slate font-xl font-bold">
                      Xui Panel Manager
                    </h1>
                    <p class="p-3 font-xsm text-align-justify rounded-[7px] bg-[var(--secondary)]">
                      Introducing XUI
                      Panel Manager: Your Gateway to Seamless Control and Management

                      In the dynamic landscape of modern applications, the XUI Panel Manager
                      shines as a remarkable Progressive Web Application (PWA) that stands as a
                      beacon of openness and efficiency. Designed as an open-source solution, XUI
                      Panel Manager empowers you to wield unparalleled control over the
                      interconnected web of XUI panels, ensuring a harmonious flow of operations
                      while managing expiration dates with precision.</p>

                  </div>
                  <div class="border-none">
                    <ul class="ul-li-inline font-xsm">
                      <li>Java</li>
                      <li>Spring boot</li>
                      <li>JS</li>
                      <li>Vue.js</li>
                      <li>Html & CSS & Js</li>
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