// Casa Paco demo - JS mínimo (menú móvil + WhatsApp)
const PHONE_E164 = "34948598074"; // +34 948 59 80 74 (sin +)
const WA_TEXT = encodeURIComponent("Hola Casa Paco, me gustaría reservar. ¿Tienen disponibilidad?");
const waLink = `https://wa.me/${PHONE_E164}?text=${WA_TEXT}`;

const btns = ["btnWhatsTop", "btnWhatsHero", "btnWhatsContact", "btnWhatsCarta", "btnWhatsGaleria"];
btns.forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink;
});

// Menú móvil
const burger = document.getElementById("burger");
const mobile = document.getElementById("mobileMenu");
if (burger && mobile) {
  burger.addEventListener("click", () => {
    const isOpen = mobile.style.display === "block";
    mobile.style.display = isOpen ? "none" : "block";
  });
}
