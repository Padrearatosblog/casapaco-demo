// Casa Paco - introducción, navegación móvil y mejoras de experiencia.
const intro = document.getElementById("intro");
const introSkip = document.getElementById("introSkip");

if (intro && document.documentElement.classList.contains("intro-pending")) {
  document.body.classList.add("intro-active");

  let introClosed = false;
  const closeIntro = () => {
    if (introClosed) return;
    introClosed = true;
    intro.classList.add("is-leaving");

    try {
      sessionStorage.setItem("casaPacoIntroSeen", "true");
    } catch (error) {}

    window.setTimeout(() => {
      document.documentElement.classList.remove("intro-pending");
      document.body.classList.remove("intro-active");
      intro.remove();
    }, 720);
  };

  introSkip?.addEventListener("click", closeIntro);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeIntro();
  }, { once: true });
  window.setTimeout(closeIntro, 2450);
} else {
  document.documentElement.classList.remove("intro-pending");
  intro?.remove();
}

const burger = document.getElementById("burger");
const mobile = document.getElementById("mobileMenu");

if (burger && mobile) {
  const openMenu = () => {
    mobile.style.display = "block";
    burger.setAttribute("aria-expanded", "true");
    burger.setAttribute("aria-label", "Cerrar menú");
  };

  const closeMenu = () => {
    mobile.style.display = "none";
    burger.setAttribute("aria-expanded", "false");
    burger.setAttribute("aria-label", "Abrir menú");
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
