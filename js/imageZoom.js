document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".foto_for_pc, .foto_for_mobile");

    images.forEach(img => {
        img.style.transition = "transform 0.4s ease";

        img.addEventListener("click", () => {
            const isZoomed = img.classList.contains("zoomed");

            if (!isZoomed) {
                img.style.transform = "scale(2.1)"; 
            } else {
                img.style.transform = "scale(1)";
            }

            img.classList.toggle("zoomed");
        });
    });
});
