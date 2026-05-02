const btn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

btn.onclick = () => {
  nav.classList.toggle("active");
};
