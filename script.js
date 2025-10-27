// Initialize AOS Scroll Animations
AOS.init({ duration: 1000, once: true });

// Back to Top Button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = (window.scrollY > 400) ? "block" : "none";
};
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Typing Text Animation in Hero
const roles = ["an Engineer", "a Designer", "a Creator", "a Developer"];
const wordSpan = document.querySelector(".dynamic-words");
let rIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  const current = roles[rIndex];
  if (!deleting) {
    wordSpan.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length + 8) deleting = true;
  } else {
    wordSpan.textContent = current.substring(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      rIndex = (rIndex + 1) % roles.length;
    }
  }
  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();