<template>
  <section id="software">
    <div class="aside">
      <p class="tag description">
        We create your <b>solution adapted to your requirements.</b> We focus on every detail to
        achieve your ideal.
      </p>
    </div>
    <div class="tag monitor">
      <img
        src="monitor.png"
        width="1000"
        alt=""
        style="filter: drop-shadow(-2px 2px 15px rgba(0, 0, 0, 0.7))"
      />
    </div>
    <!-- <div style="position: relative">
      <div class="custom-shape-divider-top-16860623830">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div> -->
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
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#software {
  color: black;
  padding: 10rem 0 0;
  /* background-color: #e2e1e1; */
  background: url('https://www.pixel4k.com/wp-content/uploads/2018/10/minimalist-mountains-black-and-white-4k_1540749002.jpg')
    no-repeat center;
  background-size: cover;
  height: fit-content;

}

.monitor {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
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
.description {
  font-size: 24px;
  text-align: center;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 1.5px;
  padding: 20px;
}

.aside {
  text-align: center;
}

.custom-shape-divider-top-16860623830 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-top-16860623830 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 20px;
}

.custom-shape-divider-top-16860623830 .shape-fill {
  fill: #232526;
}

@media screen and (max-width: 922px) {
  img {
    width: 500px !important;
  }

  .budget {
    padding: 5rem 0 7rem;
  }
}

@media screen and (max-width: 575px) {
  img {
    width: 350px !important;
  }
}
</style>
