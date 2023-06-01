<template>
  <div>
    <section class="hero">
      <header id="header" class="p-5"></header>
      <header class="hero-header" style="display: flex; justify-content: space-around">
        <div style="padding-top: 100px">
          <h1 class="hero-title pl-2" style="padding-bottom: 0px">We improve you.</h1>
          <h1 class="hero-title pl-5" style="font-size: 70px; padding-top: 20px">
            Exceed your horizons.
          </h1>
          <p class="w-75 mt-5 pl-5" id="description">
            We deliver comprehensive development solutions from end to end, we seek to streamline
            your production tasks. Our main objective is to add value to your business.
          </p>
        </div>
        <div style="padding-top: 80px; padding-right: 50px">
          <img src="laptop.png" id="pc" alt="" style="height: 420px; width: 485px" />
        </div>
      </header>
      <footer class="hero-footer pl-5">
        <a class="button button-primary" href="#">Let's Talk</a>
        <a class="button right" href="#">Know us</a>
      </footer>
    </section>
    <div class="custom-shape-divider-bottom-1685639774">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

body {
  font-family: 'PT Sans Caption', 'Helvetica Neue', Arial, Helvetica, Geneva, sans-serif;
  font-size: 3vh;
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
}

.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  box-sizing: border-box;
  color: white;
  background: linear-gradient(to bottom, rgb(90, 89, 89) 0%, rgb(0, 0, 0) 99.4%);
  background-size: cover;
  height: 100vh;
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
}

@media screen and (max-width: 575px) {
  .hero-header,
  #description,
  .hero-footer {
    text-align: center;
    margin: auto;
  }
  .hero-header {
    padding-top: 0px;
  }
  .hero-footer {
    margin-top: 50px;
  }
  .button {
    padding: 0.8em 2em !important;
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
  margin-right: 20px;
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
  transition: top ease 0.5s;
}

.button-primary:hover {
  top: -6px;
}
.custom-shape-divider-bottom-1685639774 {
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1685639774 svg {
  position: relative;
  display: block;
  width: calc(135% + 1.5px);
  height: 97px;
  background: black;
}

.custom-shape-divider-bottom-1685639774 .shape-fill {
  fill: #ffffff;
}
</style>
