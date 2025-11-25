document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".foto_for_pc, .foto_for_mobile");

    images.forEach((img) => {
        img.style.cursor = "pointer";

        img.addEventListener("click", (e) => {
            e.stopPropagation();

            const rect = img.getBoundingClientRect();

            const overlay = document.createElement("div");
            overlay.style.position = "fixed";
            overlay.style.top = 0;
            overlay.style.left = 0;
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0, 0, 0, 0.5)";
            overlay.style.zIndex = "9998";
            overlay.style.cursor = "zoom-out";
            overlay.style.opacity = 0;
            overlay.style.transition = "opacity 0.4s ease";
            document.body.appendChild(overlay);

            requestAnimationFrame(() => {
                overlay.style.opacity = 1;
            });

            const clone = img.cloneNode(true);
            clone.classList.add("zoomed-clone");

            const isMobile = window.innerWidth <= 768;

            clone.style.position = "fixed";
            clone.style.top = rect.top + "px";
            clone.style.left = rect.left + "px";
            clone.style.width = rect.width + "px";
            clone.style.height = rect.height + "px";
            clone.style.objectFit = "contain";
            clone.style.cursor = "zoom-out";
            clone.style.transition = "all 0.4s ease";
            clone.style.zIndex = "9999";

            document.body.appendChild(clone);

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const scaleX = Math.min(
                (0.9 * viewportWidth) / rect.width,
                (0.9 * viewportHeight) / rect.height
            );
            const scaleY = scaleX;
            const scale = Math.min(scaleX, scaleY);

            const targetX = viewportWidth / 2 - (rect.left + rect.width / 2);
            const targetY = viewportHeight / 2 - (rect.top + rect.height / 2);

            let extraY = 0;
            if (isMobile) {
                extraY = 10.406 - rect.top;
            }

            requestAnimationFrame(() => {
                clone.style.transform = `translate(${targetX}px, ${
                    targetY + extraY
                }px) scale(${scale})`;
            });

            function closeZoom() {
                overlay.style.opacity = 0;
                clone.style.transform = "translate(0px, 0px) scale(1)";
                clone.style.width = rect.width + "px";
                clone.style.height = rect.height + "px";
                clone.style.top = rect.top + "px";
                clone.style.left = rect.left + "px";

                clone.addEventListener(
                    "transitionend",
                    () => {
                        clone.remove();
                        overlay.remove();
                    },
                    { once: true }
                );
            }

            overlay.addEventListener("click", closeZoom);
            clone.addEventListener("click", closeZoom);
        });
    });
});
