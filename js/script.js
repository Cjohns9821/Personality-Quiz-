console.log("script.js connected!");

// Store answers by question index
const answers = {};

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove selected class from all buttons in this block
      buttons.forEach((b) => b.classList.remove("selected"));

      // Add selected class to clicked button
      btn.classList.add("selected");

      // Store answer
      answers[index] = btn.dataset.color;

      console.log("Answers so far:", answers);
    });
  });
});

function displayResult() {
  const counts = { red: 0, blue: 0, green: 0, yellow: 0 };

  // Count selected colors
  Object.values(answers).forEach((color) => {
    counts[color]++;
  });

  // Determine top color
  let topColor = null;
  let max = 0;

  for (const color in counts) {
    if (counts[color] > max) {
      max = counts[color];
      topColor = color;
    }
  }

  let message = "";

  if (topColor === "red") {
    message = "You are RED: bold, energetic, and full of passion!";
  } else if (topColor === "blue") {
    message = "You are BLUE: calm, thoughtful, and steady.";
  } else if (topColor === "green") {
    message = "You are GREEN: balanced, kind, and grounded.";
  } else if (topColor === "yellow") {
    message = "You are YELLOW: cheerful, creative, and optimistic!";
  } else {
    message = "Please answer all questions before getting your result.";
  }

  document.getElementById("result-container").textContent = message;
}

document.getElementById("result-btn").addEventListener("click", displayResult);
