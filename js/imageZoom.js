document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".foto_for_pc, .foto_for_mobile");

    images.forEach(img => {
        img.style.cursor = "pointer";
        img.style.transition = "transform 0.4s ease";

        img.addEventListener("click", e => {
            e.stopPropagation();

            const isZoomed = img.classList.contains("zoomed");

            let scaleValue = 2.1;
            if (img.classList.contains("foto_for_mobile")) {
                scaleValue = 1.5;
            }

            img.style.transform = isZoomed ? "scale(1)" : `scale(${scaleValue})`;
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
