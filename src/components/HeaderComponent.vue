<template>
  <div>
    <b-navbar toggleable="sm" fixed="top" sticky="true" id="header">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand style="font-size: 23px; padding-left: 70px; font-weight: bold back">
        <img src="logo.png" alt="" height="50" />
        <a class="logo" href="/">New Horizons</a>
      </b-navbar-brand>
      <b-collapse id="nav-text-collapse" is-nav style="justify-content: end">
        <b-navbar-nav>
          <h1>Esto es desa</h1>
          <b-nav-item-dropdown text="EN" right>
            <b-dropdown-item href="#">🇬🇧 EN</b-dropdown-item>
            <b-dropdown-item href="#">🇪🇸 ES</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-text><a href="/#aboutme">Portfolio</a></b-nav-text>
          <b-nav-text><a href="/#mystack">Team</a></b-nav-text>
          <b-nav-text><a href="/#portfolio">Services</a></b-nav-text>
          <b-nav-text><a href="/#path">Culture</a></b-nav-text>
          <b-nav-text><a class="button button-primary" href="#">Contact</a></b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
window.onscroll = function () {
  scrollFunction()
}
export default {
  name: 'NavHeader'
}
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    // document.getElementById('header').style.background =
    //   'linear-gradient(to top, rgb(223, 233, 243) 0%, white 100%)'
    document.getElementById('i-logo').style.color = 'black'
    document.getElementById('header').style.transitionProperty = '1s'
  } else {
    // document.getElementById('header').style.background = 'transparent'
    document.getElementById('i-logo').style.color = '#42b983'
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap');

#header {
  background: white;
  -webkit-transition: all ease-out 0.5s;
  -moz-transition: all ease-out 0.5s;
  -o-transition: all ease-out 0.5s;
  transition: all ease-out 0.5s;
  padding: 0px;
}

#__BVID__622561___BV_dropdown__{
  color: black !important;
}

#__BVID__622561___BV_dropdown__:hover{
  color: black !important;
}

#i-logo {
  color: white;
  margin: 0px 0px 5px 5px;
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
  transition: 0.3s;
  color: black;
  margin: 20px;
  font-size: 14px;
  letter-spacing: 3px;
  font-family: 'DM Sans', sans-serif;
}

nav li a:hover {
  color: black;
}

@media screen and (max-width: 922px) {
  nav li a {
    font-size: 12px;
  }
}

@media screen and (max-width: 829px) {
  nav li a {
    font-size: 5px;
  }
}

@media screen and (max-width: 575px) {
  nav li {
    text-align: center;
    padding: 20px;
  }

  nav li a {
    font-size: 15px;
  }

  #i-logo {
    color: black !important;
  }
}
</style>
