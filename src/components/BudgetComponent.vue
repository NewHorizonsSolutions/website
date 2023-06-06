<template>
  <div class="budget">
    <div class="subdescription">
      <p>Talk to an expert and explain what you need.</p>
    </div>
    <button class="btn-budget right">Ask for a budget</button>
  </div>
</template>

<style scoped>
.budget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #232526; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #232526, #414345); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #232526, #414345);
  color: white;
  padding: 6rem 0;
  position: relative;
}

.subdescription {
  font-size: 20px;
  text-align: center;
  font-family: Geneva, sans-serif;
  letter-spacing: 4px;
  padding: 0px 40px;
}

.btn-budget {
  background-color: #83bae7;
  color: #38393b;
  font-weight: bold;
  border-radius: 20px;
  padding: 0.8rem 1.3rem;
  font-size: .9rem;
  font-weight: bold;
  font-family: 'DM Sans', sans-serif;
  letter-spacing: 1.5px;
  cursor: pointer;
  transition: all 1s ease-in-out;
  border: #e2e1e1 solid 1px;
}

.right:hover {
  box-shadow: inset 400px 0 0 0 #38393b;
  color: rgb(255, 255, 255);
}

@media screen and (max-width: 922px) {
  .budget {
    padding: 5rem 0 7rem;
  }
}
</style>
