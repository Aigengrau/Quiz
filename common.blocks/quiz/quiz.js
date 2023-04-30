const questionnaire = document.getElementById('questionnaire');
const steps = questionnaire.querySelectorAll('.step');
const final = document.querySelector('.final-btn')
let currentStep = 0; 


function showStep(stepIndex) {
  steps.forEach((step, index) => {
    if (index === stepIndex) {
      step.style.display = 'block';
    } else {
      step.style.display = 'none';
    }
  });
}

function handleNext() {
  currentStep++;
  if (currentStep >= steps.length) {
    currentStep = steps.length - 1;
  }
  showStep(currentStep);
}

function handlePrev() {
  currentStep--;
  if (currentStep < 0) {
    currentStep = 0;
  }
  showStep(currentStep);
}

function init() {
  showStep(currentStep);
  questionnaire.querySelectorAll('.next-btn').forEach((btn) => {
    btn.addEventListener('click', handleNext);
  });
  questionnaire.querySelectorAll('.prev-btn').forEach((btn) => {
    btn.addEventListener('click', handlePrev);
  });
  final.addEventListener('click', () => {
    alert('Заявка отправлена,ждите подборку!');
  })
}

init();

