const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

menuBtn.onclick = () => {
  nav.classList.toggle("active");
};

function openModal(title) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalTitle").innerText = title;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
