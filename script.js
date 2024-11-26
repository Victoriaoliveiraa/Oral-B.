document.addEventListener("DOMContentLoaded", () => {
  const description = document.getElementById("description");

  const typeEffect = (element, text, delay = 100) => {
    return new Promise((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, delay);
    });
  };

  const revealElements = async () => {
    heading.style.opacity = 1;
    await typeEffect(heading, "Oral-B", 10);

    description.style.opacity = 1;
    await typeEffect(description, "POR UM BRASIL COM SAÚDE BUCAL 100%.", 30);

    button.style.opacity = 1;
  };

  // Trigger animation on section load
  revealElements();
});
