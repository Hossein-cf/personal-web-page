<template>
  <section id="works">
    <div style="min-height: 100vh ;" class="d-flex justify-content-center align-items-center">
      <div>
        <h3 class="text-lightest-slate"><span class="text-info">03.</span> Some Things I’ve Built</h3>

      </div>
    </div>
    <div style="min-height: 100vh ;" class="vstack gap-5">
      <div class="text-center">
        <h3 class="text-lightest-slate">Other Noteworthy Projects</h3>
        <router-link to="#" class="text-info">
          view the archive
        </router-link>
      </div>
      <div class="row">
        <div v-for="i in 6" :key="i" class="col-12 col-md-6 col-lg-4 project">
          <div class="card bg-secondary mb-3">
            <div class="card-header">
              <div class="hstack gap-2">
                <div>
                  <i class="bi bi-folder  text-info"/>
                </div>
                <div class="ms-auto hstack gap-2">
                  <i class="bi bi-github"/>
                  <i class="bi bi-box-arrow-up-right "/>
                </div>
              </div>
            </div>
            <div class="card-body">
              <h5 class="card-title">Time to Have More Fan</h5>
              <p class="card-text">A single page web app for helping me choose where to travel, built with Next.js,
                Firebase, and Tailwind CSS</p>
            </div>
            <div class="card-footer">
              <ul>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
                <li>Firebase</li>
              </ul>
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
.card-footer li {
  margin: 3px;
  display: inline;
}

.card-footer ul {
  padding: 0;

}





</style>