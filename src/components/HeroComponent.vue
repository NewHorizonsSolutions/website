<template>
  <div>
    <section id="home"  class="hero">
      <video
        class="elementor-background-video-hosted elementor-html5-video"
        autoplay
        muted
        playsinline
        loop
        src="video.mp4"
      ></video>
      <div class="capa"></div>
      <div style="position: relative">
        <header id="header" style="padding-top: 100px"></header>
        <header class="hero-header">
          <div style="padding-top: 100px">
            <h1 class="hero-title pl-10" style="padding-bottom: 0px">We improve you.</h1>
            <h1 class="hero-title pl-15" style="font-size: 70px; padding-top: 20px; display: flex">
              Exceed your
              <div>
                <div class="ml-4 typewriter" style="display: flex; width: 350px">
                  <span class="text_1 pb-5">horizons...</span>
                  <span class="text_2 pb-5">prospects.</span>
                </div>
              </div>
              <!-- <span class="text_1">limits.</span>
              <span class="text_2">goals.</span> -->
            </h1>
            <p class="w-50 mt-5 pl-15" id="description">
              We deliver comprehensive development solutions from end to end, we seek to streamline
              your production tasks. Our main objective is to add value to your business.
            </p>
          </div>
          <!-- <div style="padding-top: 80px; padding-right: 50px">
            <img src="laptop.png" id="pc" alt="" style="height: 420px; width: 485px" />
          </div> -->
          <footer class="hero-footer pl-15 pt-10">
            <a class="button button-primary" href="/#contactus">Let's Talk</a>
            <a class="button right" href="/#aboutus">Know us</a>
          </footer>
        </header>
      </div>
      <!-- <div class="custom-shape-divider-bottom-1685871786">
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
      </div> -->
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

body {
  font-family: 'PT Sans Caption', 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;
  font-size: 3vh;
}

.text_1 {
  animation: text1;
}

.text_2 {
  animation: text2;
}

.text_1,
.text_2 {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  /* width: fit-content !important; */
  display: inline-block;
  position: relative;
  animation-duration: 20s;
  animation-timing-function: steps(15, end);
  animation-iteration-count: infinite;
}

.text_1::after,
.text_2::after {
  content: '|';
  position: absolute;
  right: 0;
  animation: caret infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
}

@keyframes text2 {
  0%,
  50%,
  100% {
    width: 0;
  }

  60%,
  90% {
    width: 21.2em;
  }
}

@keyframes text1 {
  0%,
  50%,
  100% {
    width: 0;
  }
  10%,
  40% {
    width: 17em;
  }
}

@keyframes caret {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.capa {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #1c1c1d;
  opacity: 0.6;
}

#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#logo {
  text-decoration: none;
  color: white;
  font-size: 5vh;
  font-weight: bold;
}

#menu-icon {
  font-family: Geneva, sans-serif;
  font-size: 6vh;
}

#description {
  font-family: 'DM Sans', sans-serif;
  font-size: 2.5vh;
  margin-top: 0px !important;
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  box-sizing: border-box;
  color: white;
  background: linear-gradient(to top, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
  background-size: cover;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.hero-title {
  max-width: 16em;
  margin: 0;
  font-size: 12vh;
  font-weight: bold;
  line-height: 0.9;
}

@media only screen and (min-width: 32em) {
  .hero-title {
    font-size: 16vh;
  }
}

@media screen and (max-width: 1280px) {
  .hero {
    height: 100%;
  }
}

@media screen and (max-width: 922px) {
  #pc {
    display: none;
  }

  .hero-header,
  #description,
  .hero-footer {
    text-align: center;
    margin: auto;
    padding: auto;
  }
  .hero-header h1 {
    padding: 0px !important;
    padding-bottom: 30px !important;
    margin: auto !important;
  }

  p {
    width: 75% !important;
    margin: auto !important;
    padding: 0px !important;
  }
  .hero-footer {
    margin-top: 50px;
    margin: auto !important;
    justify-content: center !important;
    align-items: center !important;
    padding: 50px !important;
    padding-bottom: 100px !important;
  }
  .button {
    padding: 10px 50px !important;
    margin: auto;
  }

  .hero-title {
    display: block !important;
  }

  .text_1,
  .text_2 {
    margin-top: 10px !important;
    padding-bottom: 0px !important;
  }

  .typewriter {
    margin: auto !important;
  }
}

.hero-footer {
  display: flex;
  margin-bottom: 1em;
  padding: 5px 0px 90px 5px;
}

.button {
  padding: 10px 50px;
  color: white;
  text-decoration: none;
  border: 0.1em solid white;
  border-radius: 15px;
  transition: 1s;
  background: transparent;
}

.right:hover {
  box-shadow: inset 400px 0 0 0 white;
  color: black;
}

.button-primary {
  color: black;
  background-color: white;
  top: 0;
  position: relative;
  margin-right: 20px;
  transition: top ease 0.5s;
}

.button-primary:hover {
  top: -6px;
}
.custom-shape-divider-bottom-1685871786 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1685871786 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 29px;
}

.custom-shape-divider-bottom-1685871786 .shape-fill {
  fill: #f7f7f7;
}
</style>
