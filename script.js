document.documentElement.classList.add("js-ready");

const bodyPage = document.body.dataset.page;
const nav = document.querySelector(".site-nav");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

for (const link of navLinks) {
  const href = link.getAttribute("href");

  if (
    (bodyPage === "home" && href === "index.html") ||
    (bodyPage !== "home" && href === `${bodyPage}.html`)
  ) {
    link.classList.add("is-active");
  }
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
