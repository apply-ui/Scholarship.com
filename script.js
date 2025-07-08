const applyBtn = document.getElementById('applyBtn');
const form = document.getElementById('scholarshipForm');
const cardOutput = document.getElementById('cardOutput');
const studentNameOutput = document.getElementById('studentNameOutput');
const codeOutput = document.getElementById('codeOutput');

// ✅ Apply button click → show form
applyBtn.addEventListener('click', () => {
  form.style.display = 'block';
  form.scrollIntoView({ behavior: 'smooth' });
});

// ✅ Form submission → generate code
form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('student').value;
  const code = 'ASGS' + Math.floor(10000 + Math.random() * 90000);

  studentNameOutput.textContent = 'Student: ' + name;
  codeOutput.textContent = code;

  form.style.display = 'none';
  cardOutput.style.display = 'block';
  cardOutput.scrollIntoView({ behavior: 'smooth' });
});

// ✅ Reset everything
function resetForm() {
  document.getElementById('scholarshipForm').reset();
  cardOutput.style.display = 'none';
  form.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ✅ Download card
function downloadScreenshot() {
  const card = document.getElementById('cardSection');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'scholarship_card.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}
