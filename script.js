const form = document.getElementById('scholarshipForm');
const cardOutput = document.getElementById('cardOutput');
const studentNameOutput = document.getElementById('studentNameOutput');
const codeOutput = document.getElementById('codeOutput');
const applyBtn = document.getElementById('applyBtn');
const motivationWords = document.querySelectorAll('.word');

// Show form on apply
applyBtn.addEventListener('click', () => {
  form.scrollIntoView({ behavior: 'smooth' });
});

// Animate motivation words
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight / 1.3;
  motivationWords.forEach((word, index) => {
    const top = word.getBoundingClientRect().top;
    if (top < trigger && !word.classList.contains('visible')) {
      setTimeout(() => {
        word.classList.add('visible');
      }, index * 120);
    }
  });
});

// Form submit
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const studentName = document.getElementById('student').value;
  const randomCode = 'ASGS' + Math.floor(10000 + Math.random() * 90000);

  studentNameOutput.textContent = 'Student: ' + studentName;
  codeOutput.textContent = randomCode;

  form.style.display = 'none';
  cardOutput.style.display = 'block';
  cardOutput.scrollIntoView({ behavior: 'smooth' });
});

// Reset form
function resetForm() {
  document.getElementById('scholarshipForm').reset();
  form.style.display = 'block';
  cardOutput.style.display = 'none';
  form.scrollIntoView({ behavior: 'smooth' });
}

// Download card
function downloadScreenshot() {
  const card = document.getElementById('cardSection');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'scholarship_card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
