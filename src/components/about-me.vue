<template>
    <section id="about">
        <div class="d-flex justify-content-between align-items-center flex-column flex-md-row">
            <div style="max-width: 800px" class="text-start">
                <div>
                    <h1 class="text-lightest-slate font-xl fw-bold"><span
                            class="text-info font-lg font-fira-code">01.</span> About Me</h1>
                </div>
                <div class="font-md">
                    <p>
                        My name is Hossein, and I was born in 2001. In 2018, I started studying computer engineering at
                        the
                        university, and soon after, I began my journey into programming. My first programming language
                        was
                        Java, but I eventually switched to C# and the .NET Core framework.
                    </p>
                    <p>
                        Initially, I focused on developing desktop applications, but my interest shifted towards web
                        development after a few months. It took me some time, but eventually, I fully grasped the
                        concepts
                        of web applications and grew to love developing them. Now, I'm a full-stack developer with
                        experience in Vue.js, Bootstrap, HTML, CSS, JS, and TS.
                    </p>
                    <p>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                </div>
                <ul class="font-sm">
                    <li>Java</li>
                    <li>C#</li>
                    <li>.Net core</li>
                    <li>EntityFramework</li>
                    <li>Sql Server</li>
                    <li>HTML & CSS & JS</li>
                    <li>TypeScript</li>
                    <li>Vue.js</li>
                    <li>Bootstrap</li>
                    <li>Devextreme</li>
                </ul>
                <br/>
                <p class="font-md">
                    As a developer, I am passionate about creating clean, functional, and user-friendly applications. I
                    am constantly learning and exploring new technologies and approaches to stay up to date with the
                    latest industry trends. I enjoy working on challenging projects that push me to expand my skills and
                    abilities. If you're looking for a dedicated and skilled developer, I'm here to help!
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