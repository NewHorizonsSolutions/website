<template>
  <section id="customers">
    <h1 class="title">Customers</h1>
    <p class="description w-75">These are some of the companies that trust us.</p>
    <v-container style="padding-top: 100px; padding-bottom: 90px">
      <v-row no-gutters style="overflow: hidden; justify-content: center">
        <v-col order="6" class="m-3">
          <v-sheet class="pa-2 ma-2" style="background: transparent; text-align: center">
            <img src="nouvelle.png" alt="" />
          </v-sheet>
        </v-col>
        <v-col order="12" class="m-3">
          <v-sheet class="pa-2 ma-2" style="background: transparent; text-align: center">
            <img src="lwd.png" alt="" style="padding-top: 20px" />
          </v-sheet>
        </v-col>
        <v-col order="1" class="m-3">
          <v-sheet class="pa-2 ma-2" style="background: transparent; text-align: center">
            <img src="mcpapers.png" alt="" style="padding-top: 20px" />
          </v-sheet>
        </v-col>
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
  background: black;
  color: white;
  padding: 6rem 0;
  position: relative;
}

img {
  width: auto;
  cursor: pointer;
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
