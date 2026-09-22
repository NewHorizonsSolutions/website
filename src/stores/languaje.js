import { ref } from 'vue'
import { defineStore } from 'pinia'

const STORAGE_KEY = 'nh-lang'

export const store = defineStore('languaje', () => {
  const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
  const languaje = ref(saved === 'es' || saved === 'en' ? saved : 'es')

  function changeLanguaje(lang) {
    languaje.value = lang
    localStorage.setItem(STORAGE_KEY, lang)
  }

  return { languaje, changeLanguaje }
})
