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
}