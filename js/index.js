// FORM
let currentSlide = 0;
let slide = document.querySelectorAll('.form__slide');
let steps = document.querySelectorAll(".form__step");
const inputEl = document.querySelectorAll('.form__input');
const form = document.querySelector('.field-container');

// form.addEventListener('click', (event) => {
//   const input = event.target;
//   const parent = event.target.parentElement;
//   if(input.classList.contains('form__input')) {
//     const icon = parent.querySelector('.form__field--icon');

//     if(input.checkValidity()){
//       icon.style.backgroundColor = 'green';
//     }
//     console.log(icon);
//   }
// });

// const inputs = Array.prototype.slice.call(inputEl); 
// inputs.map((input) => {
//   const parent = input.parentElement;
//   const element = document.createElement('div');
//   element.classList.add('form__field--icon');
//   parent.appendChild(element);
// });

const showSlide = (n) => {
  slide[n].style.display = "block";

  //Button hidding
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (slide.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next"; 
  }

  for(let m = 0; m <=n; m++) {
    steps[m].style.backgroundColor = "var(--green)";
  }
}

const nextPrev = (n) => { 
  
  //Validate Form
  console.log(validateForm());
  if (n == 1 && !validateForm()) return false; 
  
  //Hiding the current Slide
  slide[currentSlide].style.display = null;
  if(n == -1) {
    steps[currentSlide].style.backgroundColor = "var(--white)";
  }

  //Implement prev and next logic
  currentSlide = currentSlide + n;
  if (currentSlide >= slide.length) { 
    //...the form gets submitted:
    document.querySelector(".form").submit();
    alert("Confirm form Submission");   
    return false;
  }
  showSlide(currentSlide);
}

const validateForm = () => {
  const childInput = slide[currentSlide].querySelectorAll('.form__input');
  const arrayInput = Array.prototype.slice.call(childInput);
  let valid = true;
  arrayInput.map((input) => {
  valid = input.checkValidity();
  });
  return valid;
}

showSlide(currentSlide);  
