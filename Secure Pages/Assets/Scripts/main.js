const nextButton = document.getElementById("next");
const submitButton = document.getElementById("validate");
const form = document.getElementById("stepByStepForm");
console.log(form)
const dots = document.getElementsByClassName("progress-bar__dot");
const numberOfSteps = 3;
let toPay = document.getElementById("continue-btn");
let toSub = document.getElementById("pay-btn");

let currentStep = 1;

for (let i = 0; i < dots.length; ++i) {
   dots[i].addEventListener("click", () => {
      goToStep(i + 1);
   });
}
form.addEventListener("submit", function(e){
    console.log("Submit")
});
toPay.onclick=goNext2
toSub.onclick=goNext3

function goNext2(e) {
console.log('step2')
   e.preventDefault();
   currentStep = 2
   goToStep(2);
}
function goNext3(e) {
   e.preventDefault();
   currentStep = 3
   goToStep(3);
}
function goToStep(stepNumber) {
   currentStep = stepNumber;
   let inputsToHide = document.getElementsByClassName("step");
   let inputs = document.getElementsByClassName(`step${currentStep}`);
   //hide all input
   for (let i = 0; i < inputsToHide.length; ++i) {
      hide(inputsToHide[i]);
   }

   //only show the right one
   for (let i = 0; i < inputs.length; ++i) {
      show(inputs[i]);
   }

   //reached final step
   if (currentStep === numberOfSteps) {
    //   disable(nextButton);
      show(submitButton);
   }

   //else if first step
   else if (currentStep === 1) {
      hide(submitButton);
   } else {
      hide(submitButton);
   }
}

function enable(elem) {
   elem.classList.remove("disabled");
   elem.disabled = false;
}

function disable(elem) {
   elem.classList.add("disabled");
   elem.disabled = true;
}

function show(elem) {
   elem.classList.remove("hidden");
}

function hide(elem) {
   elem.classList.add("hidden");
}


  const select = document.querySelector("#bank-list");
  //Insert Api link
fetch("https://api.paystack.co/bank")
  .then((response) => response.json())
  .then((data) => {
  let banks = data.data
  console.log(banks)
    banks.forEach((bank) => toBankList(bank));
  });

function toBankList(bank) {
  const opt = document.createElement("option");
  opt.value = bank.name;
  opt.classList=("bank")
  const content = document.createTextNode(`${bank.name}`);
  opt.appendChild(content);
  select.appendChild(opt);
}
