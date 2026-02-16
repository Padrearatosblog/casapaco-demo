// Casa Paco demo - JS mínimo (WhatsApp + menú móvil)
const PHONE_E164 = "34948598074"; // +34 948 59 80 74 (sin +)
const WA_TEXT = encodeURIComponent("Hola Casa Paco, me gustaría reservar. ¿Tienen disponibilidad?");
const waLink = `https://wa.me/${PHONE_E164}?text=${WA_TEXT}`;

["btnWhatsTop","btnWhatsHero","btnWhatsContact","btnWhatsCarta","btnWhatsGaleria"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = waLink;
});

// Menú móvil (abre/cierra)
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
