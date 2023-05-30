<template>
  <div class="hero">
    <div class="hero__bg">
      <picture>
        <img
          src="https://images.unsplash.com/photo-1491982883790-ead7c97a047e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2594&q=80"
        />
      </picture>
    </div>

    <div class="hero__cnt">
      <div class="p-4" style="text-align: center; background: white; border-radius: 10px">
        <img src="logo.png" width="150" alt="" style="border-radius: 12px" />
        <h1 class="mt-2" style="font-family: 'Josefin Sans', sans-serif; color: black">
          <b>New Horizons</b>
        </h1>
        <h1 style="font-family: 'Josefin Sans', sans-serif; font-size: 20px; color: black">
          Solutions
        </h1>
      </div>
      <br />
      <h3 class="m-2" style="font-family: Geneva, sans-serif; font-size: 15px">
        Sorry, we are working...
      </h3>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans', sans-serif;
}

// ## Default
$hero-color: #fff;
$hero-height: 100vh;
$hero-width: 100vw;
$hero-bg-mix: rgba(#29042f, 0.4); // hide with false

.hero {
  display: grid;
  position: relative;
  grid-template-columns: $hero-width;
  grid-template-rows: $hero-height;
  place-items: center;
  overflow: hidden;
  animation: clip-hero-anim 1.25s cubic-bezier(0.29, 0.8, 0.8, 0.98);
  will-change: clip-path;

  &__bg,
  &__cnt {
    align-self: center;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  // Images
  &__bg {
    display: grid;
    position: relative;
    z-index: 0;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    animation: fade-in 0.75s linear;
    will-change: opacity;

    // Smoothing background gradient
    @if ($hero-bg-mix) {
      &::before {
        content: '';
        display: block;
        position: absolute;
        z-index: 5;
        top: -10%;
        right: -10%;
        bottom: -10%;
        left: -10%;
        background: $hero-bg-mix;
        background-blend-mode: screen;
      }
    }

    & picture {
      display: flex;
      height: $hero-height;
      width: $hero-width;
      animation: scaling-hero-anim 4s 0.25s cubic-bezier(0, 0.71, 0.4, 0.97) forwards;
      will-change: transform;
    }

    & img {
      display: block;
      object-fit: cover;
      object-position: 77% 50%;
      height: auto;
      width: 100%;
    }
  }

  &__cnt {
    display: grid;
    position: relative;
    place-items: center;
    z-index: 10;
    color: $hero-color;
    font-size: 2.5vw;
    text-transform: uppercase;
    opacity: 0;
    animation: fade-in 0.75s 1.5s linear forwards;

    & svg {
      height: 12vw;
      & path {
        fill: #fff;
      }
    }

    & h1 {
      margin-bottom: 0;
    }
  }
}

// ## Animation
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes scaling-hero-anim {
  from {
    transform: scale(1.25);
  }
  to {
    transform: scale(1.1);
  }
}
@keyframes clip-hero-anim {
  from {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}
</style>
