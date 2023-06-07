<script setup>
import HeroComponent from '../components/HeroComponent.vue'
import ServicesComponent from '../components/ServicesComponent.vue'
import TechComponent from '../components/TechComponent.vue'
import TailorSoftware from '../components/TailorSoftware.vue'
// import BudgetComponent from '../components/BudgetComponent.vue'
import CustomersComponent from '../components/CustomersComponent.vue'
</script>

<template>
  <main>
    <HeroComponent />
    <ServicesComponent />
    <TechComponent />
    <div class="custom-shape-divider-bottom-1685871172">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
      </svg>
    </div>
    <TailorSoftware />
    <!-- <BudgetComponent /> -->
    <CustomersComponent />
  </main>
</template>

<style scoped>
.custom-shape-divider-bottom-1685871172 {
  position: absolute;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotateY(180deg);
}

.custom-shape-divider-bottom-1685871172 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 83px;
}

.custom-shape-divider-bottom-1685871172 .shape-fill {
  fill: black;
}
</style>
