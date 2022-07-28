const signInBtn = document.querySelector('.signIn-btn');
const signUpBtn = document.querySelector('.signUp-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;

// console.log(signUnBtn);

signUpBtn.addEventListener('click', function () {
  formBox.classList.add('active');
  body.classList.add('active');
});

signInBtn.addEventListener('click', function () {
  formBox.classList.remove('active');
  body.classList.remove('active');
});