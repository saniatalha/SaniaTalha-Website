document.addEventListener("DOMContentLoaded", function () {

  // Typing Effect


  const heading = document.querySelector(".heroine-section h2");
  const text = "Hi, I'm Sania 👋";
  let index = 0;

  heading.textContent = "";

  function typeEffect() {
    if (index < text.length) {
      heading.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
    }
  }

  typeEffect();
});