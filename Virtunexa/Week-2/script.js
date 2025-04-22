const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const formSteps = document.querySelectorAll(".form-step");
const stepIndicators = document.querySelectorAll(".step-indicator");
let currentStep = 0;

nextBtn.addEventListener("click", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");

  if (!name.value || !email.value) {
    alert("Please fill all required fields.");
    return;
  }

  formSteps[currentStep].classList.remove("active");
  stepIndicators[currentStep].classList.remove("active");
  currentStep++;
  formSteps[currentStep].classList.add("active");
  stepIndicators[currentStep].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  formSteps[currentStep].classList.remove("active");
  stepIndicators[currentStep].classList.remove("active");
  currentStep--;
  formSteps[currentStep].classList.add("active");
  stepIndicators[currentStep].classList.add("active");
});

document.getElementById("multiStepForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const resume = document.getElementById("resume");
  const coverLetter = document.getElementById("coverLetter");

  if (!resume.value || !coverLetter.value) {
    alert("Please fill all required fields.");
    return;
  }

  alert("Application Submitted!");
  this.reset();
  window.location.reload();
});
