<template>
  <div>
    <b-navbar toggleable="sm" fixed="top" sticky="true" id="header">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand style="font-size: 23px; padding-left: 20px; font-weight: bold back">
        <img src="logo.png" alt="" height="50" />
        <a class="logo" href="/#home">New Horizons</a>
      </b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav style="justify-content: end">
        <b-navbar-nav>
          <div style="display: flex; text-align: center; justify-content: center">
            <span class="mdi mdi-earth globe" style="margin: auto"></span>
            <b-nav-item-dropdown :text="storeLang.languaje.toLocaleUpperCase()" right>
              <b-dropdown-item v-on:click="changeLanguaje('en')">English</b-dropdown-item>
              <b-dropdown-item v-on:click="changeLanguaje('es')">Español</b-dropdown-item>
            </b-nav-item-dropdown>
          </div>
          <b-nav-text><a href="/#home">{{ storeLang.languaje == 'en' ? "Home" : "Inicio"}}</a></b-nav-text>
          <b-nav-text><a href="/#services">{{ storeLang.languaje == 'en' ? "Services" : "Servicios"}}</a></b-nav-text>
          <b-nav-text><a href="/#technologies">{{ storeLang.languaje == 'en' ? "Technologies" : "Tecnologias"}}</a></b-nav-text>
          <b-nav-text><a href="/#customers">{{ storeLang.languaje == 'en' ? "Customers" : "Clientes"}}</a></b-nav-text>
          <b-nav-text><a href="/#aboutus" class="cult">{{ storeLang.languaje == 'en' ? "About Us" : "Nosotros"}}</a></b-nav-text>
          <b-nav-text><a class="button button-primary" href="/#contact">{{ storeLang.languaje == 'en' ? "Contact" : "Contacto"}}</a></b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script setup>
import { store } from '../stores/languaje.js'
const storeLang = store()

window.onscroll = function () {
  scrollFunction()
}

function changeLanguaje(languaje) {
  storeLang.changeLanguaje(languaje)
}

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    (document.documentElement.scrollTop > 100 && !window.matchMedia('(max-width: 575px)').matches)
  ) {
    document.getElementById('header').style.padding = '0px'
  } else {
    document.getElementById('header').style.padding = '12px'
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#header {
  background: white;
  -webkit-transition: all ease-out 0.3s;
  -moz-transition: all ease-out 0.3s;
  -o-transition: all ease-out 0.3s;
  transition: all ease-out 0.3s;
  padding: 12px;
  box-shadow: inset 0 0 5px #a9a8a8;
}

#i-logo {
  color: white;
  margin: 0px 0px 5px 5px;
}

.cult {
  margin-right: 25px;
}

.button {
  padding: 0.6em 1.3em;
  color: white;
  text-decoration: none;
  border: 0.1em solid white;
  border-radius: 20px;
}

.button-primary {
  color: white;
  background-color: rgb(31, 31, 31);
  border: 1.5px solid black;
}

.button-primary:hover {
  color: black;
  background-color: transparent;
  transition: 0.5s;
}

a {
  text-decoration: none;
  font-family: Geneva, sans-serif;
  color: white;
}

.logo {
  color: black;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  font-family: 'Josefin Sans', sans-serif;
}

nav {
  padding: 30px;
}

nav li a {
  font-weight: bold;
  text-decoration: none;
  transition: 0.1s;
  color: black;
  margin: 20px;
  font-size: 14px;
  letter-spacing: 3px;
  font-family: 'DM Sans', sans-serif;
  padding-bottom: 6px;
}

nav li a:hover {
  border-bottom: 3px solid;
}

@media screen and (max-width: 1070px) {
  nav li a {
    margin: 8px;
  }
}

@media screen and (max-width: 940px) {
  nav li a {
    font-size: 10px;
  }

  .cult {
    margin: 0px;
  }

  .globe {
    display: none;
  }
}

@media screen and (max-width: 575px) {
  nav li {
    text-align: center;
    padding: 20px;
  }

  nav li a {
    visibility: inherit;
    font-size: 15px;
  }

  #i-logo {
    color: black !important;
  }

  #header {
    padding: 0 !important;
  }
}
</style>
