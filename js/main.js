// Casa Paco - JS (solo menú móvil + UX)
const burger = document.getElementById("burger");
const mobile = document.getElementById("mobileMenu");

if (burger && mobile) {
  const openMenu = () => {
    mobile.style.display = "block";
    burger.setAttribute("aria-expanded", "true");
  };

  const closeMenu = () => {
    mobile.style.display = "none";
    burger.setAttribute("aria-expanded", "false");
  };

  const toggle = () => {
    const isOpen = mobile.style.display === "block";
    isOpen ? closeMenu() : openMenu();
  };

  burger.addEventListener("click", toggle);

  mobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", () => {
    if (window.innerWidth < 900) closeMenu();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
}

// Marca la sección visible para que la navegación sea más clara.
const navLinks = [...document.querySelectorAll('.nav__link[href^="#"]')];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && sections.length) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach(link => {
      const active = link.getAttribute("href") === `#${visible.target.id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }, { rootMargin: "-35% 0px -55%", threshold: [0, .25, .6] });

  sections.forEach(section => observer.observe(section));
}
