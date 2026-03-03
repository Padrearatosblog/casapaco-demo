// Casa Paco demo - JS mínimo (menú móvil)
const burger = document.getElementById("burger");
const mobile = document.getElementById("mobileMenu");

if (burger && mobile) {
  const toggle = () => {
    const isOpen = mobile.style.display === "block";
    mobile.style.display = isOpen ? "none" : "block";
    burger.setAttribute("aria-expanded", String(!isOpen));
  };

  burger.addEventListener("click", toggle);

  // Cierra al hacer click en un enlace
  mobile.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mobile.style.display = "none";
      burger.setAttribute("aria-expanded", "false");
    });
  });
}