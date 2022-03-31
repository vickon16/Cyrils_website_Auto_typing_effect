const autoInput = document.querySelector(".auto-input")

let typed = new Typed(autoInput, {
  strings: ["Victor <span class='cy'>Cyril</span>", "a Web Developer", "a Graphic Designer", "a Building Technologist"],
  typeSpeed: 50,
  backSpeed: 50,
  loop : true,
});