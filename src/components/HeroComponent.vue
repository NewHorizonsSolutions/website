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
          <img src="laptop.png" id="pc" alt="" style="height: 400px; width: 480px" />
        </div>
      </header>
      <footer class="hero-footer pl-5">
        <a class="button button-primary" href="#">Let's Talk</a>
        <a class="button" href="#">Know us</a>
      </footer>
    </section>
    <!-- <article>
      <h2>Some additional content</h2>
      <p>
        The rest of the page content continues below the hero. You can use the hero at the top of
        your page, e.g. the home page. A hero is great to display a high quality picture together
        with tasty title.
      </p>
      <p>
        Ad donec tincidunt torquent ultricies convallis sodales faucibus magna, fringilla lorem
        blandit sollicitudin donec faucibus curae orci molestie, et proin curae aliquet venenatis
        ligula amet vivamus orci varius arcu.
      </p>
      <p>
        Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus convallis,
        pharetra habitasse elementum ut bibendum per sociosqu phasellus etiam, velit faucibus
        integer torquent leo elementum maecenas netus.
      </p>
    </article> -->
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
  background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
  background-size: cover;
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
}

.button-primary {
  color: black;
  background-color: white;
}

article {
  max-width: 36em;
  margin: 0 auto;
  padding: 1em;
}
</style>
