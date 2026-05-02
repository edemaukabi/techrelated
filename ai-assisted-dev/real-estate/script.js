// Tab switching
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    this.classList.add("active");
  });
});

// Mobile menu
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("open");
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 60) {
    nav.style.padding = "14px 5%";
    nav.style.boxShadow = "0 4px 30px rgba(0,0,0,0.08)";
  } else {
    nav.style.padding = "20px 5%";
    nav.style.boxShadow = "none";
  }
});

// Form submit
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".form-submit");
  btn.textContent = "Message Sent ✓";
  btn.style.background = "var(--gold)";
  btn.style.borderColor = "var(--gold)";
  setTimeout(() => {
    btn.textContent = "Send Message →";
    btn.style.background = "";
    btn.style.borderColor = "";
    e.target.reset();
  }, 3000);
}

// Intersection Observer for fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".prop-card, .agent-card, .testi-card, .why-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.55s ease, transform 0.55s ease";
    observer.observe(el);
  });
