// Change text dynamically
function changeText() {
  const textElement = document.getElementById('dynamicText');
  textElement.textContent = 'Let your thoughts run wild — explore the paradox!';
}

// Toggle styles dynamically
function toggleBoxStyle() {
  const box = document.getElementById('interactive-box');
  box.classList.toggle('highlighted');
}

// Add a new quote (element) to the section
function addElement() {
  const newPara = document.createElement('p');
  newPara.textContent = `"The opposite of a profound truth may well be another profound truth." – Niels Bohr`;
  newPara.classList.add('quote');
  document.getElementById('interactive-box').appendChild(newPara);
}

// Remove the last quote
function removeElement() {
  const box = document.getElementById('interactive-box');
  const quotes = box.querySelectorAll('.quote');
  if (quotes.length > 0) {
    box.removeChild(quotes[quotes.length - 1]);
  } else {
    alert('No quotes to remove!');
  }
}

// Optional: Toggle light/dark theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}
