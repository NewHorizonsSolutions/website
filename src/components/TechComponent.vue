<template>
  <section id="technologies">
    <h1 class="title">Technologies</h1>
    <p class="description w-75">We work with the best technologies to deliver the best results.</p>
    <v-container style="padding-top: 60px">
      <v-row no-gutters>
        <v-col v-for="icon in icons" :key="icon" cols="3" sm="3">
          <v-icon class="ma-6 pa-2" :icon="icon"></v-icon>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      icons: [
        'mdi-vuejs',
        'mdi-nodejs',
        'mdi-firebase',
        'mdi-language-python',
        'mdi-language-java',
        'mdi-terraform',
        'mdi-android',
        'mdi-language-csharp',
        'mdi-vuejs',
        'mdi-nodejs',
        'mdi-firebase',
        'mdi-language-python',
        'mdi-language-java',
        'mdi-terraform',
        'mdi-android',
        'mdi-language-csharp'
      ]
    }
  }
})
</script>

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
}

i {
  font-size: 50px;
  color: rgb(219, 219, 219);
  cursor: pointer;
  filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2));
}

i:hover {
  color: rgb(197, 195, 195);
  transition: 0.3s;
  transform: scale(1.3);
}

.description {
  font-size: 17px;
  letter-spacing: 3px;
  margin: auto;
}
</style>
