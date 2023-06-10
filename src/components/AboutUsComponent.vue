<template>
  <section id="aboutus">
    <div class="cont">
      <div class="monitor onleft">
        <div class="tag left">
          <div class="mb-4 onleft" style="display: flex">
            <h1
              style="
                font-size: 30px;
                margin: auto 0px;
                font-weight: bold;
                letter-spacing: 1px;
                border-bottom: 2px solid black;
              "
            >
              About Us
            </h1>
          </div>
          <p style="font-family: 'DM Sans', sans-serif; font-size: 16px; text-align: initial">
            We're a passionate software solutions company driven by innovation, collaboration, and
            excellence. Our mission is to empower clients with cutting-edge solutions, while our
            vision is to be a trusted partner for their technology needs. Together, we make a
            positive impact in the digital world.
          </p>
        </div>
        <span
          class="mdi mdi-molecule"
          style="font-size: 48px; border-radius: 1000px; height: 70px; width: 70px"
        ></span>
      </div>
      <hr>
      <!-- DIVISION -->
      <div class="monitor onright">
        <div>
          <span
            class="mdi mdi-fingerprint huella"
            style="font-size: 48px; border-radius: 1000px; height: 70px; width: 70px"
          ></span>
        </div>
        <div class="tag rightdiv" id="showed">
          <div class="mb-4 onright" style="display: flex">
            <h1
              style="
                font-size: 30px;
                margin: auto 0px;
                font-weight: bold;
                letter-spacing: 1px;
                border-bottom: 2px solid black;
              "
            >
              Our Identity
            </h1>
          </div>
          <div style="display: flex; align-items: center">
            <p class="rightxt" style="font-family: 'DM Sans', sans-serif; font-size: 16px">
              We're a passionate software solutions company driven by innovation, collaboration, and
              excellence. Our mission is to empower clients with cutting-edge solutions, while our
              vision is to be a trusted partner for their technology needs. Together, we make a
              positive impact in the digital world.
            </p>
            <span
              class="mdi mdi-fingerprint huella2"
              style="
                font-size: 48px;
                border-radius: 1000px;
                height: 70px;
                width: 70px;
                display: none;
              "
            ></span>
          </div>
        </div>
      </div>
      <hr>
      <!-- DIVISION -->
      <div class="monitor onleft">
        <div class="tag left">
          <div class="mb-4 onleft" style="display: flex">
            <h1
              style="
                font-size: 30px;
                margin: auto 0px;
                font-weight: bold;
                letter-spacing: 1px;
                border-bottom: 2px solid black;
              "
            >
              The Team
            </h1>
          </div>
          <p style="font-family: 'DM Sans', sans-serif; font-size: 16px; text-align: initial">
            We're a passionate software solutions company driven by innovation, collaboration, and
            excellence. Our mission is to empower clients with cutting-edge solutions, while our
            vision is to be a trusted partner for their technology needs. Together, we make a
            positive impact in the digital world.
          </p>
        </div>
        <span
          class="mdi mdi-wall"
          style="font-size: 48px; border-radius: 1000px; height: 70px; width: 70px"
        ></span>
      </div>
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

<style scoped>
#aboutus {
  background-color: #f0f0f0;
  height: fit-content;
  padding: 40px;
  padding-top: 70px;
}
.cont {
  padding-top: 30px;
  width: 1100px;
  margin: auto;
}
.onleft {
  justify-content: flex-start;
}
.onright {
  justify-content: flex-end;
}
.rightxt {
  text-align: end;
}
.monitor {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
}
.aside {
  text-align: center;
}

.left {
  width: 520px;
  padding-right: 50px;
  margin-right: 0px;
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

.rightdiv {
  width: 520px;
  padding-left: 50px;
  margin-left: 0px;
}
.right:hover {
  box-shadow: inset 400px 0 0 0 #38393b;
  color: rgb(255, 255, 255);
}

@media screen and (max-width: 922px) {
  .cont {
    width: 100%;
  }
  .rightxt {
    text-align: initial !important;
    padding-right: 50px;
  }
  .onright {
    justify-content: flex-start;
  }
  .huella {
    display: none;
  }
  .huella2 {
    display: block !important;
    margin-bottom: 50px !important;
  }
  .rightdiv {
    width: 100%;
    padding-left: 0px;
    margin-left: 0px;
  }
}
</style>
