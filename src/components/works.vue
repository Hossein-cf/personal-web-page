<template>
  <section id="works">
    <div style="min-height: max-content" class="vstack gap-5">
      <div>
        <h1 class="text-lightest-slate font-xl fw-bold "><span
            class="text-info font-lg font-fira-code">03.</span> Some Things I’ve Built</h1>
      </div>
      <div class="hstack">
        <div style="width: 100%">
          <div class="mb-3 ">
            <div class="card-container  g-0">
              <div class="box overlay ">
                <div>

                  <div>
                    <h1 class="text-info font-fira-code font-xsm">Featured Project</h1>
                    <h1 style="color: var(--lightest-slate)" class="font-xl fw-bold">Accounting Web
                      App</h1>

                    <p class="p-3 font-xsm text-align-justify"
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

              <div class="box right-0 overlay top-10">
                <img src="../assets/images/accounting-dashboard.png" class="img-thumbnail img-fluid rounded-start"
                     alt="...">
              </div>
            </div>
          </div>
          <div class="mb-3">
            <div class="card-container  g-0">

              <div class=" box overlay">
                <div>
                  <div>
                    <h1 class="text-info font-fira-code font-xsm">Featured Project</h1>
                    <h1 style="color: var(--lightest-slate)" class="font-xl fw-bold">
                      Xui Panel Manager
                    </h1>
                    <p class="p-3 font-xsm text-align-justify"
                       style=";border-radius: 7px; background: var(--bs-secondary)">Introducing XUI
                      Panel Manager: Your Gateway to Seamless Control and Management

                      In the dynamic landscape of modern applications, the XUI Panel Manager
                      shines as a remarkable Progressive Web Application (PWA) that stands as a
                      beacon of openness and efficiency. Designed as an open-source solution, XUI
                      Panel Manager empowers you to wield unparalleled control over the
                      interconnected web of XUI panels, ensuring a harmonious flow of operations
                      while managing expiration dates with precision.</p>

                  </div>
                  <div class="border-none ">
                    <ul class="ul-li-inline font-xsm ">
                      <li>Java</li>
                      <li>Spring boot</li>
                      <li>JS</li>
                      <li>Vue.js</li>
                      <li>Html & CSS & Js</li>
                    </ul>
                    <ul class="ul-li-inline font-lg" style="color: var(--lightest-slate)">
                      <li>
                        <a class="anchor-color-white"
                           href="https://github.com/mahdi-turrkk/x-ui-panel-manager">
                          <i class="bi bi-github"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="box right-0 overlay  top-10 ">
                <img src="../assets/images/xui-dashboard.png" class="img-thumbnail img-fluid "
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

/*.ul-li-inline>li::after{*/
/*  content: ',';*/
/*}*/

.card-container {
  background: transparent;
  position: relative;
  width: 100%;
  /*height: max-content;*/
  /*margin: 30px;*/
  /*border: 1px solid red;*/
}


</style>