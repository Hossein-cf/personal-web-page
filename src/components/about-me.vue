<template>
  <section id="about">
    <div style="height: 100vh" class="d-flex justify-content-between align-items-center">
      <div style="max-width: 450px" class="text-start">
        <h3 class="text-lightest-slate"><span class="text-info">01.</span> About Me</h3>
        <p>
          Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web
          development
          started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom
          reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge
          corporation, and a student-led design studio. My main focus these days is building accessible, inclusive
          products and digital experiences at Upstatement for a variety of clients.
        </p>
        <p>
          I also recently launched a course that covers everything you need to build a web app with the Spotify API
          using
          Node & React.
        </p>
        <p>
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul>
          <li>WordPress</li>
          <li>Eleventy</li>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>JavaScript</li>
        </ul>
      </div>
      <div style="max-width: 450px">
        image
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
ul{
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
}
li:before{
  content: "▹";
  color: var(--green);
}
</style>