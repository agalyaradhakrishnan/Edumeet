const button=document.querySelector('.menu i');
const navbar=document.querySelector('ul');

button.addEventListener('click',()=>{
    button.classList.toggle('fa-xmark');
    navbar.classList.toggle('slide');
});
//carousel//
let slidePosition=0;
const sliders=document.querySelectorAll('.slider-item');
const totalSlider=sliders.length;
function update(){
  sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
  });

  sliders[slidePosition].classList.add('active');
}
function PrevSlide(){
  if(slidePosition==0){
    slidePosition=totalSlider-1;
  }else{
    slidePosition--;
  }
  update();
}
function NextSlide(){
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  update();
}
let video = document.getElementById("myvideo");
let but = document.getElementById("yes");

but.addEventListener('click',()=>{
    if(video.paused){
      video.play();
      but.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }else{
        video.pause();
      but.innerHTML = '<i class="fa-solid fa-play"></i>'; 
    }
})
//..................................form.......................//
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("mail");
const country = document.getElementById("country");
const message = document.getElementById("message");

form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
});

function checkinput(){
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const countryValue = document.myform.country.value;
    const messageValue = message.value.trim();



    if(usernameValue === ''){
        setError(username,'Username cannot be blank');
        username.style.borderColor = 'red'
        alert("Please Enter Name");
        return false;
    }
    else{
        setSuccess(username);
        username.style.borderColor = 'green'

    }
   
    if(emailValue === ''){
        setError(email,'Email cannot be blank');
        email.style.borderColor = 'red'
        alert("Please Enter Email");
        return false;
    }
    else if(!isEmail(emailValue)){
        setError(email,'Not a valid Email');
    }
    else{
        setSuccess(email);
        email.style.borderColor = 'green'

    }
    
    if (countryValue === '-1') {
        setError(country, 'cannot be blank');
        country.style.borderColor = "red";
        alert("Please select country");
        return false;
      }
      else {
        setSuccess(country);
        country.style.borderColor = "green";
      }
      if (messageValue === '') {
        setError(message, 'cannot be blank');
        country.style.borderColor = "red";
        alert("Please Text Message");
        return false;
      }
      else {
        setSuccess(message);
        country.style.borderColor = "green";
      }
 

}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email);
}
