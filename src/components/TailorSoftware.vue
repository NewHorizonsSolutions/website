<template>
  <section id="software">
    <div class="aside">
      <p class="tag description">
        We create your <b>solution adapted to your requirements.</b> We focus on every detail to
        achieve your ideal.
      </p>
    </div>
    <div class="tag monitor" style="justify-content: center">
      <div class="left">
        <h1 class="mb-4" style="font-size: 30px">Let's create something remarkable!</h1>
        <p style="font-family: 'DM Sans', sans-serif; font-size: 16px">
          We develop robust, secure, and scalable software solutions. Our primary focus is on
          enhancing user experience, incorporating a UX stage involving key users in all our
          projects. We guarantee optimal performance by leveraging cutting-edge technologies.
        </p>
        <button class="btn-budget right mt-4">Ask for a budget</button>
      </div>
      <video
        src="software.mp4"
        autoplay
        loop
        muted
        style="
          filter: drop-shadow(-2px 2px 15px rgba(0, 0, 0, 0.7));
          width: 600px;
          border-radius: 20px;
        "
      ></video>
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
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#software {
  color: black;
  padding: 10rem 0 0.6rem;
  background-color: #f0f0f0;
  height: fit-content;
}

.left {
  width: 520px;
  padding-right: 50px;
  margin-right: 50px;
  border-right: 1.5px solid black;
}

.monitor {
  display: flex;
  align-items: center;
  text-align: center;
  padding-bottom: 100px;
  width: 100%;
  margin: 5rem auto;
}
.tag {
  opacity: 0;
  transform: translate(0, 10vh);
  transition: all 3s;
}
.btn-budget {
  background-color: #83bae7;
  font-weight: bold;
  border-radius: 20px;
  padding: 0.8rem 1.3rem;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 1.5px;
  cursor: pointer;
  box-shadow: inset 400px 0 0 0 #38393b;
  color: rgb(255, 255, 255);
  transition: all 1s ease-in-out;
  border: #030303 solid 1px;
}

.right:hover {
  box-shadow: inset 400px 0 0 0 #ebecec;
  color: rgb(0, 0, 0);
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
  .budget {
    padding: 5rem 0 7rem;
  }

  video {
    display: none;
  }

  .left {
    border: none;
    margin-right: 0px;
    padding: 30px;
  }
}
</style>
