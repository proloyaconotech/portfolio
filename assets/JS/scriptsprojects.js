 // Basic Lightbox Viewer
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".project-gallery img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "lightbox-overlay";
      overlay.innerHTML = `
        <div class="lightbox-container">
          <img src="${img.src}" alt="${img.alt}">
        </div>`;

      document.body.appendChild(overlay);

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          overlay.remove();
        }
      });
    });
  });
});