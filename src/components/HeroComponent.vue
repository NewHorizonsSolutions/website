<template>
  <div>
    <section class="hero">
      <header id="header" class="p-5">
      </header>
      <header class="hero-header">
        <h1 class="hero-title pl-2" style="padding-bottom: 0px;">We improve you.</h1>
        <h1 class="hero-title pl-5" style="font-size: 70px; padding-top: 20px;">Exceed your horizons.</h1>
      </header>
      <footer class="hero-footer p-5">
        <a class="button button-primary" style="padding: 10px 50px;" href="#">English</a>
        <a class="button" style="padding: 10px 50px;" href="#">Spanish</a>
      </footer>
    </section>
    <article>
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
    </article>
  </div>
</template>

<style scoped>

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


.hero {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 1em;
  box-sizing: border-box;
  color: white;
  background: url(https://images.unsplash.com/photo-1500417148159-68083bd7333a) center center
    no-repeat;
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

.hero-footer {
  display: flex;
  margin-bottom: 1em;
}

.button {
  padding: 0.5em 0.67em;
  color: white;
  text-decoration: none;
  border: 0.1em solid white;
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
