const menuButton = document.getElementById("menu-toggle");
const menu = document.getElementById("nav-menu");
const links = document.querySelectorAll(".nav-menu a");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.classList.toggle("open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  });
});

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

function animateNumber(element) {
  if (element.dataset.done) return;
  element.dataset.done = "true";
  const target = Number(element.dataset.counter);
  const decimals = String(target).includes(".") ? 1 : 0;
  const suffix = element.dataset.suffix || "";
  if (reduceMotion) {
    element.textContent = target.toFixed(decimals) + suffix;
    return;
  }
  const duration = 1050;
  const start = performance.now();

  function update(timestamp) {
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = (target * eased).toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    animateNumber(entry.target);
    observer.unobserve(entry.target);
  });
}, { threshold: 0.4 });

document.querySelectorAll("[data-counter]").forEach((counter) => counterObserver.observe(counter));

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-menu a");

function updateCurrentSection() {
  let active = "";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 110) active = section.id;
  });
  navigationLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + active);
  });
}

window.addEventListener("scroll", updateCurrentSection, { passive: true });
updateCurrentSection();
