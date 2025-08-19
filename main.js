// ===== MENU TOGGLE (works on all pages) =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
  // for accessibility/state
  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}


// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️"; // Sun icon
} else {
  themeToggle.textContent = "🌙"; // Moon icon
}

// Toggle theme on click
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️"; // Sun
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙"; // Moon
    }
  });
}

// ===== Read More / Read Less toggle with smooth scroll =====
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const article = button.closest(".blog-preview");
    article.classList.toggle("expanded");

    if (article.classList.contains("expanded")) {
      button.textContent = "Read Less";
      article.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      button.textContent = "Read More";
    }
  });
});
