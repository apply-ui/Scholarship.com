// script.js
document.getElementById('applyBtn').addEventListener('click', () => {
  document.getElementById('scholarshipForm').scrollIntoView({ behavior: 'smooth' });
});

const form = document.getElementById('scholarshipForm');
const cardOutput = document.getElementById('cardOutput');
const studentNameOutput = document.getElementById('studentNameOutput');
const codeOutput = document.getElementById('codeOutput');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const studentName = document.getElementById('student').value;
  const randomCode = 'ASGS' + Math.floor(10000 + Math.random() * 90000);

  studentNameOutput.textContent = 'Student: ' + studentName;
  codeOutput.textContent = randomCode;

  form.style.display = 'none';
  cardOutput.style.display = 'block';
});

function resetForm() {
  document.getElementById('scholarshipForm').reset();
  cardOutput.style.display = 'none';
  form.style.display = 'block';
}

function downloadScreenshot() {
  const card = document.getElementById('cardSection');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'scholarship_card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
