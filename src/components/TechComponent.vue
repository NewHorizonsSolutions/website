<template>
  <section id="technologies">
    <h1 class="title">Technologies</h1>
    <p class="description w-75">We work with the best technologies to deliver the best results.</p>
    <v-container style="padding-top: 100px; padding-bottom: 90px;">
      <v-row no-gutters style="overflow: hidden; justify-content: center">
        <v-col order="6" class="m-3">
          <v-sheet class="pa-2 ma-2" style="background: transparent; padding: 0px !important">
            <h3 class="mb-4" style="text-align: center; color: white">Backend</h3>
            <i class="devicon-nodejs-plain colored"></i>
            <i class="devicon-dotnetcore-plain colored"></i>
            <i class="devicon-express-original"></i>
            <i class="devicon-java-plain colored"></i>
            <br />
            <br />
            <i class="devicon-mysql-plain colored"></i>
            <i class="devicon-postgresql-plain colored"></i>
            <i class="devicon-heroku-original colored"></i>
            <i class="devicon-firebase-plain colored"></i>
          </v-sheet>
        </v-col>
        <v-col order="12" class="m-3">
          <v-sheet class="pa-2 ma-2" style="background: transparent; padding: 0px !important">
            <h3 class="mb-4" style="text-align: center; color: white">Devops</h3>
            <i class="devicon-docker-plain colored"></i>
            <i class="devicon-kubernetes-plain colored"></i>
            <i class="devicon-amazonwebservices-original colored"></i>
            <i class="devicon-terraform-plain colored"></i>
            <br />
            <br />
            <i class="devicon-selenium-original colored"></i>
            <i class="devicon-jenkins-line colored"></i>
            <i class="devicon-git-plain colored"></i>
            <i class="devicon-gradle-plain"></i>
          </v-sheet>
        </v-col>
        <v-col order="1" class="m-3">
          <v-sheet class="pa-2 ma-2" style="background: transparent; padding: 0px !important">
            <h3 class="mb-4" style="text-align: center; color: white">Frontend</h3>
            <i class="devicon-javascript-plain colored"></i>
            <i class="devicon-react-original colored"></i>
            <i class="devicon-vuejs-plain colored"></i>
            <i class="devicon-vuetify-line colored"></i>
            <br />
            <br />
            <i class="devicon-html5-plain colored"></i>
            <i class="devicon-css3-plain colored"></i>
            <i class="devicon-bootstrap-plain colored"></i>
            <i class="devicon-sass-original colored"></i>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#technologies {
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #232526, #414345); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #232526, #414345);
  color: white;
  padding: 50px 0px 50px 0px;
  padding-top: 0px !important;
  text-align: center;
}

.title {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  padding-top: 70px;
}

i {
  font-size: 50px;
  color: rgb(219, 219, 219);
  cursor: pointer;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2));
  margin: 20px;
  transition: 1s all;
}

i:hover {
  color: #aaababac;
}

.description {
  font-size: 17px;
  letter-spacing: 3px;
  margin: auto;
}
</style>
