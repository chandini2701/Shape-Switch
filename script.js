let currentShape = "circle";

const shapeNames = {
  circle: "Circle",
  triangle: "Triangle",
  square: "Square",
  rectangle: "Rectangle",
  pentagon: "Pentagon",
  hexagon: "Hexagon",
  diamond: "Diamond",
  star: "Star",
  "broken-heart": "Broken Heart",
};

function selectShape(shape, name) {
  currentShape = shape;

  const preview = document.getElementById("previewShape");

  // Clear previous content and styles
  preview.className = "preview-shape";
  preview.style.cssText = "";

  // NORMAL SHAPES

  if (shape !== "broken-heart" && shape !== "star") {
    preview.classList.add(shape);
    preview.textContent = "";

    document.getElementById("selectedShape").textContent = name;
  }

  // STAR

  if (shape === "star") {
    preview.classList.add("star");
    preview.textContent = "★";

    document.getElementById("selectedShape").textContent = "Star";
  }

  // BROKEN HEART → RED HEART

  if (shape === "broken-heart") {
    preview.classList.add("heart");
    preview.textContent = "❤️";

    document.getElementById("selectedShape").textContent = "Red Heart ❤️";
  }

  // Active card

  const cards = document.querySelectorAll(".shape-card");

  cards.forEach(function (card) {
    card.classList.remove("active");
  });

  cards.forEach(function (card) {
    if (card.innerText.includes(name)) {
      card.classList.add("active");
    }
  });

  // Reset controls for new shape

  document.getElementById("sizeSlider").value = 180;
  document.getElementById("rotationSlider").value = 0;

  document.getElementById("sizeValue").textContent = 180;
  document.getElementById("rotationValue").textContent = 0;

  document.getElementById("colorPicker").value = "#68ef3f";
}

/* ================= COLOR ================= */

function changeColor() {
  const color = document.getElementById("colorPicker").value;

  const preview = document.getElementById("previewShape");

  if (currentShape === "triangle") {
    preview.style.borderBottomColor = color;
  } else if (currentShape === "star") {
    preview.style.color = color;
  } else if (currentShape !== "broken-heart") {
    preview.style.backgroundColor = color;
  }
}

/* ================= SIZE ================= */

function changeSize() {
  const size = document.getElementById("sizeSlider").value;

  document.getElementById("sizeValue").textContent = size;

  const preview = document.getElementById("previewShape");

  if (currentShape === "triangle") {
    preview.style.borderLeftWidth = size / 2 + "px";

    preview.style.borderRightWidth = size / 2 + "px";

    preview.style.borderBottomWidth = size + "px";
  } else if (currentShape === "star" || currentShape === "broken-heart") {
    preview.style.fontSize = size + "px";
  } else if (currentShape === "rectangle") {
    preview.style.width = size * 1.4 + "px";

    preview.style.height = size * 0.75 + "px";
  } else {
    preview.style.width = size + "px";

    preview.style.height = size + "px";
  }
}

/* ================= ROTATION ================= */

function changeRotation() {
  const rotation = document.getElementById("rotationSlider").value;

  document.getElementById("rotationValue").textContent = rotation;

  const preview = document.getElementById("previewShape");

  preview.style.transform = "rotate(" + rotation + "deg)";
}

/* ================= MORPH ================= */

function morphShape() {
  const preview = document.getElementById("previewShape");

  preview.classList.remove("morph-animation");

  void preview.offsetWidth;

  preview.classList.add("morph-animation");
}

/* ================= RANDOM ================= */

function randomShape() {
  const shapes = [
    "circle",
    "triangle",
    "square",
    "rectangle",
    "pentagon",
    "hexagon",
    "diamond",
    "star",
    "broken-heart",
  ];

  const randomIndex = Math.floor(Math.random() * shapes.length);

  const randomShape = shapes[randomIndex];

  selectShape(randomShape, shapeNames[randomShape]);
}

/* ================= RESET ================= */

function resetShape() {
  currentShape = "circle";

  const preview = document.getElementById("previewShape");

  preview.className = "preview-shape circle";

  preview.textContent = "";

  preview.style.cssText = "";

  document.getElementById("colorPicker").value = "#68ef3f";

  document.getElementById("sizeSlider").value = 180;

  document.getElementById("rotationSlider").value = 0;

  document.getElementById("sizeValue").textContent = 180;

  document.getElementById("rotationValue").textContent = 0;

  document.getElementById("selectedShape").textContent = "Circle";

  const cards = document.querySelectorAll(".shape-card");

  cards.forEach(function (card) {
    card.classList.remove("active");
  });

  cards[0].classList.add("active");
}

/* ================= EXPLORE ================= */

function openStudio() {
  document.getElementById("shapes").scrollIntoView({
    behavior: "smooth",
  });
}

/* ================= HEAL HEART ================= */

function transformHeart() {
  const heart = document.getElementById("heartShape");

  heart.textContent = "❤️";

  heart.classList.add("healed");
}
