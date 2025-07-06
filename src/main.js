// src/main.js

// 1️⃣ Import your compiled Tailwind + custom CSS
import './index.css'

// 2️⃣ DOM ready…
window.addEventListener('DOMContentLoaded', () => {
  // Mobile menu
  const mobileBtn  = document.getElementById('mobile-menu-button')
  const mobileMenu = document.getElementById('mobile-menu')
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden')
    })
  }

  // Back-to-top
  const backToTop = document.getElementById('back-to-top')
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        backToTop.classList.replace('opacity-0','opacity-100')
        backToTop.classList.replace('invisible','visible')
      } else {
        backToTop.classList.replace('opacity-100','opacity-0')
        backToTop.classList.replace('visible','invisible')
      }
    })
    backToTop.addEventListener('click', () =>
      window.scrollTo({ top: 0, behavior: 'smooth' })
    )
  }

  // Booking form
  const form = document.getElementById('booking-form')
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault()
      alert("Thanks! We’ll be in touch soon to confirm your session.")
      form.reset()
    })
  }
})
