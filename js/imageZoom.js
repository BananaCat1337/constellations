document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".foto_for_pc, .foto_for_mobile");

    images.forEach(img => {

        img.style.cursor = "pointer";

        img.style.transition = "transform 0.4s ease";

        img.addEventListener("click", (e) => {
            e.stopPropagation();
        
            const isZoomed = img.classList.contains("zoomed");

            if (!isZoomed) {
                img.style.transform = "scale(2.1)"; 
            } else {
                img.style.transform = "scale(1)";
            }

            img.classList.toggle("zoomed");
        });
    });

    document.addEventListener("click", () => {
        const zoomed = document.querySelector(".zoomed");
        if (!zoomed) return;

        zoomed.style.transform = "scale(1)";
        zoomed.classList.remove("zoomed");
    });
});
