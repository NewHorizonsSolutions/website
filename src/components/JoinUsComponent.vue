<template>
  <section id="joinus">
    <div style="position: relative">
      <div class="container">
        <h1 class="title">Join us. We need you!</h1>
        <p class="description">
          Write to us and send us your resume, personal site or portfolio if you want to be part of
          the NH family ❤️
        </p>
      </div>
      <div style="text-align: center; margin: 30px">
        <a class="btn-budget" href="/#contact" style="text-decoration: none">Join the team</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
#joinus {
  /* background: url('https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?w=2000&t=st=1686676457~exp=1686677057~hmac=b0e6627fc3473607fa72d3bf9859e9a40beaae876c6d17b0585c46e5e6d83ac5')
    no-repeat center;
  filter: grayscale(80%);
  background-size: cover; */
  background: #232526;
  background: -webkit-linear-gradient(to right, #232526, #414345);
  background: linear-gradient(to top, #020202, #414345);
  padding: 20px;
}

.title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  padding: 30px 0px 0px 0px;
}
.container {
  color: white;
  text-align: center;
  padding: 0px;
}

.btn-budget {
  font-weight: bold;
  border-radius: 20px;
  padding: 0.9rem 1.7rem;
  font-size: 0.9rem;
  font-weight: bold;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 1.5px;
  cursor: pointer;
  box-shadow: inset 400px 0 0 0 white;
  color: black;
  transition: all 1s ease-in-out;
  border: white solid 1px;
}

.description {
  width: 30%;
  margin: auto;
}

@media screen and (max-width: 922px) {
  .description {
    width: 80%;
  }
}
</style>
