<template>

  <div class=" fixed-bottom-left contact">
    <div>
      <ul>
        <li><i class="bi bi-instagram"></i></li>
        <li><i class="bi bi-facebook"></i></li>
        <li><i class="bi bi-twitter"></i></li>
        <li><i class="bi bi-linkedin"></i></li>
        <li><i class="bi bi-github"></i></li>
      </ul>

    </div>

  </div>
  <div class="fixed-bottom-right contact">
    <div>
      <a href="mailto:h.shaker2001@gmail.com ">
        h.shaker2001@gmail.com
      </a>
    </div>
  </div>
  <div class="container-fluid fixed-bottom" style=" height: 2.5rem;">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div>
        Built by Hossein Shakeri
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped>


.fixed-bottom-left {
  position: fixed;
  bottom: 0;
  right: auto;
  left: 40px;
  z-index: 10;
}

.fixed-bottom-right {
  position: fixed;
  bottom: 0;
  right: 40px;
  left: auto;
  z-index: 10;
}

.contact {
  width: 40px;
}

.contact a {
  writing-mode: vertical-lr;
  text-orientation: mixed;
  margin: 10px auto;
  color:var(--light-slate);
  text-decoration: none;
  transition: transform 300ms;
}
.contact a:hover{
  color: var(--bs-info);
  transform: translateY(-3px);
}

.contact div {
  display: flex;
  flex-direction: column;
}

.contact div::after {
  content: "";
  display: block;
  height: 100px;
  width: 1px;
  margin: auto;
  background-color: var(--light-slate);
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}




</style>