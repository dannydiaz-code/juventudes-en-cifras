// Mejora de accesibilidad y navegación para la portada.
// Los enlaces de las tarjetas apuntan a páginas independientes del proyecto.
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      window.location.href = card.href;
    }
  });
});
