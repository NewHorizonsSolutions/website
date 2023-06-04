<template>
  <section id="services">
    <h1 class="title">Services</h1>
    <div>
      <b-card-group deck class="justify-center" style="padding-bottom: 300px; padding-top: 30px">
        <div>
          <b-card
            tag="article"
            style="max-width: 20rem; border: 2px solid black"
            class="tag m-5 box--gradient"
            align="center"
          >
            <img src="design.png" alt="" height="70" class="m-5" />
            <h3>Design</h3>
            <b-card-text class="mb-10" style="font-family: 'DM Sans', sans-serif">
              Creating custom software solutions to meet your unique business needs and drive the
              growth that identifies you.
            </b-card-text>
          </b-card>
        </div>
        <div>
          <b-card
            tag="article"
            style="max-width: 20rem; border: 2px solid black"
            class="tag m-5 box--gradient"
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
            class="tag m-5 box--gradient"
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
    <!-- <img src="mountain.png" id="mountain" alt="" style="width: -webkit-fill-available" /> -->
    <div class="custom-shape-divider-bottom-1685871171">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>
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

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#services {
  padding-bottom: 190px;
  background: url('https://papers.co/wallpaper/papers.co-mt01-winter-mountain-snow-bw-nature-white-35-3840x2160-4k-wallpaper.jpg')
    no-repeat center;
  background-size: cover;
  height: fit-content;
}
.title {
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  padding: 50px 0px 0px;
  color: black;
}

@media screen and (max-width: 922px) {
  .box--gradient {
    background: linear-gradient(to bottom, #e8e9ef, #eee, #e8e9f1) !important;
  }
}

@keyframes shine {
  0% {
    transform: translateX(-100%) translateY(-100%) rotate(30deg);
  }
  80% {
    transform: translateX(-100%) translateY(-100%) rotate(30deg);
  }
  100% {
    transform: translateX(100%) translateY(100%) rotate(30deg);
  }
}

.wrapper {
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: center;
}

.box--gradient {
  display: flex;
  height: 375px;
  margin: 0 10px;
  position: relative;
  width: 300px;
  z-index: 0;
  overflow: hidden;
  background: transparent;
  -webkit-box-shadow: 20px 6px 107px 18px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 20px 6px 107px 18px rgba(0, 0, 0, 0.41);
  box-shadow: 20px 6px 107px 18px rgba(0, 0, 0, 0.41);

  &:after {
    content: '';
    top: 0;
    transform: translateX(100%) rotate(30deg);
    width: 300%;
    height: 300%;
    position: absolute;
    z-index: 1;
    animation: shine 3s infinite ease-in;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(128, 186, 232, 0) 100%
    );
  }
  &.silver {
    background: linear-gradient(to bottom, #bcc6cc, #eee, #bcc6cc);
  }
  &.gold {
    background: linear-gradient(to bottom, #c39738, #deb761, #c39738);
    &:after {
      animation-delay: 1s;
    }
  }
  &.platinum {
    background: linear-gradient(to bottom, #e8e9ef, #eee, #e8e9f1);
    &:after {
      animation-delay: 2s;
    }
  }
}

section {
  // height: 300px;
  position: relative;
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

.custom-shape-divider-bottom-1685871171 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1685871171 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 83px;
}

.custom-shape-divider-bottom-1685871171 .shape-fill {
  fill: #242526;
}
</style>
