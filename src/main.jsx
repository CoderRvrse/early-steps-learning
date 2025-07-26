// File: early-steps-ui-fresh/src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Keep your existing style import
import './style.css'

// Initialize React app
const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// PRESERVE YOUR EXISTING VANILLA JS CODE
// This will still work alongside React

// 1) Mobile menu toggle & back-to-top
window.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const btn = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");
  btn?.addEventListener("click", () => menu.classList.toggle("hidden"));

  // Back-to-top
  const back = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      back.classList.replace("opacity-0","opacity-100");
      back.classList.replace("invisible","visible");
    } else {
      back.classList.replace("opacity-100","opacity-0");
      back.classList.replace("visible","invisible");
    }
  });
  back?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
});

// 2) Simple booking-form placeholder logic
// Note: This will be replaced by React component later
;(function() {
  const form = document.getElementById("booking-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thanks! We'll be in touch soon to confirm your session.");
    form.reset();
  });
})();