<template>
  <section id="customers">
    <h1 class="title">Customers</h1>
    <p class="description w-75">These are some of the companies that trust us.</p>
    <v-container style="padding-top: 100px; padding-bottom: 90px;">
      <v-row no-gutters style="justify-content: center; text-align: center; width: 90%; margin: auto">
        <v-col style="margin: auto"> <img src="mcpapers.png" alt="" /> </v-col>
        <v-col style="margin: auto">
          <img src="nouvelle.png" alt="" />
        </v-col>
        <v-col style="margin: auto"> <img src="lwd.png" alt="" /> </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#customers {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #232526;
  background: -webkit-linear-gradient(to right, #232526, #414345);
  background: linear-gradient(to top, #020202, #414345);
  color: white;
  padding: 6rem 0;
  position: relative;
}

img {
  width: 250px;
  margin: 20px;
  cursor: pointer;
}

@media screen and (max-width: 575px) {
  img {
    margin: 40px;
  }
}

.title {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
}

.description {
  font-size: 17px;
  letter-spacing: 3px;
  margin: auto;
  text-align: center;
}
</style>
