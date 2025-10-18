(function () {
  const colors = ["#ff086fff", "#ff972fff", "#FFFF00", "#3bffa3ff", "#00aeffff", "#e100ffff"];

  function createStar(x, y) {
    const star = document.createElement("div");
    star.className = "cursor-star";

    // Random rainbow color
    star.style.background = colors[Math.floor(Math.random() * colors.length)];

    // Position
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Random burst offset
    const offsetX = (Math.random() - 0.5) * 60;
    const offsetY = (Math.random() - 0.5) * 60;
    star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    document.body.appendChild(star);

    // Remove after animation
    setTimeout(() => star.remove(), 600);
  }

  document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 3; i++) {
      createStar(e.pageX, e.pageY);
    }
  });
})();
