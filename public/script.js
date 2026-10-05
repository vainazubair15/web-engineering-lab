function greet(name) {
  return `Hello, ${name}!`;
}

const heading = document.getElementById("greeting");
heading.textContent = greet("World");
