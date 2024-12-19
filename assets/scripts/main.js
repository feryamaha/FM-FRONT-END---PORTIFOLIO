
document.addEventListener("DOMContentLoaded", () => {
    const customCursor = document.createElement("div");
    customCursor.classList.add("custom-cursor");
    document.body.appendChild(customCursor);

    let trails = [];

    document.addEventListener("mousemove", (e) => {
        customCursor.style.top = `${e.clientY}px`;
        customCursor.style.left = `${e.clientX}px`;

        const trail = document.createElement("div");
        trail.classList.add("trail");
        trail.style.top = `${e.clientY}px`;
        trail.style.left = `${e.clientX}px`;
        document.body.appendChild(trail);
        trails.push(trail);

        setTimeout(() => {
            trail.style.opacity = 0;
            setTimeout(() => {
                document.body.removeChild(trail);
                trails.shift();
            }, 800); // Tempo para remover o trail
        }, 300); // Tempo para iniciar o fade-out
    });
});

