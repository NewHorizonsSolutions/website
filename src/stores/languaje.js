import { ref } from 'vue'
import { defineStore } from 'pinia'

export const store = defineStore('languaje', () => {
  const languaje = ref("en")
  
  function changeLanguaje(lang) {
    languaje.value = lang
  }

  return { languaje, changeLanguaje }
})
