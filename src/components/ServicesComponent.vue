<template>
  <section id="services">
    <h1 class="title">Services</h1>
    <div>
      <b-card-group deck class="justify-center">
        <div>
          <b-card
            tag="article"
            style="max-width: 20rem; border: 2px solid black"
            class="tag m-5"
            align="center"
          >
            <img src="design.png" alt="" height="70" class="m-5" />
            <h3>Design</h3>
            <b-card-text class="mb-5" style="font-family: 'DM Sans', sans-serif">
              Crafting customized software solutions to meet your unique business needs and drive
              growth.
            </b-card-text>
          </b-card>
        </div>
        <div>
          <b-card
            tag="article"
            style="max-width: 20rem; border: 2px solid black"
            class="tag m-5"
            align="center"
          >
            <img src="development.png" alt="" height="70" class="m-5" />

            <h3>Development</h3>
            <b-card-text class="mb-5" style="font-family: 'DM Sans', sans-serif">
              Our dedicated team of experts excels in developing custom software tailored to your
              unique needs.
            </b-card-text>
          </b-card>
        </div>
        <div>
          <b-card
            tag="article"
            style="max-width: 20rem; border: 2px solid black"
            class="tag m-5"
            align="center"
          >
            <img src="implementation.png" alt="" height="70" class="m-5" />

            <h3>Implementation</h3>
            <b-card-text class="mb-5" style="font-family: 'DM Sans', sans-serif">
              We specialize in end-to-end implementation, ensuring integration and successful
              deployment.
            </b-card-text>
          </b-card>
        </div>
      </b-card-group>
    </div>
    <img src="mountain.png" id="mountain" alt="" style="width: -webkit-fill-available" />
  </section>
</template>

<script>
import $ from 'jquery'

$(document).on('scroll', function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $('.tag')

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass('visible')
    } else {
      $(tag).removeClass('visible')
    }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#services {
  background: linear-gradient(
    to bottom,
    rgb(255, 255, 255) 0%,
    rgb(255, 255, 255) 0%,
    rgb(187, 187, 187) 99.4%
  );
  height: fit-content;
}
.title {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  padding-top: 50px;
  color: black;
}

section {
  height: 100vh;
}

.tag {
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 3s;
}

.tag.visible {
  opacity: 1;
  transform: translate(0, 0);
}
</style>
