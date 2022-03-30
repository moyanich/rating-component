"use strict";

/*
TO DO 
1. Smoother transitions
2. give error when  no rating is selected
*/

const submit = document.querySelector('#submit');
const ratingScale = document.querySelector('.rating-scale');
const ratingOptions = ratingScale.children;

console.log(ratingOptions);
let selection;

function makeSelection(e) {

    if (e.target.classList.contains("rating-scale")) console.log('me');;

}

ratingScale.addEventListener("click", makeSelection);

/*
document.querySelector('#submit').addEventListener('click', selected);

function selected() {
    document.querySelector('.rating-state').classList.add('hidden');
    document.querySelector('.state').classList.remove('hidden');
}

*/



/*
const rating = document.querySelector(".rating");
const thanks = document.querySelector(".thanks");
const ratingScale = document.querySelector(".rating-scale");
const ratingOptions = ratingScale.children;
const submit = document.querySelector(".submit");
const userRating = document.querySelector(".user-rating");

let selection;
function select(e) {
  if (e.target.classList.contains("rating-scale")) return;
  for (let i = 0; i < ratingOptions.length; i++) {
    ratingOptions[i].classList.remove("selected");
  }
  e.target.classList.add("selected");
  selection = +e.target.textContent;
}

function shake() {
  submit.classList.add("shake");
  setTimeout(() => submit.classList.remove("shake"), 501);
}

function switchState() {
  if (!selection) {
    shake();
  } else {
    rating.style.opacity = 0;
    rating.addEventListener("transitionend", function () {
      rating.classList.add("hidden");
      thanks.classList.remove("hidden");
      setTimeout(() => (thanks.style.opacity = 1));
    });
    userRating.textContent = `You selected ${selection} out of 5`;
  }
}

ratingScale.addEventListener("click", select);
submit.addEventListener("click", switchState);

*/



/*



const selected = () => {
    document.querySelector('.rating-state').classList.add('hidden');
    document.querySelector('.state').classList.remove('hidden');
}


document.querySelector('#item1').addEventListener('click', selectOne);
document.querySelector('#item2').addEventListener('click', selectOne);
document.querySelector('#item3').addEventListener('click', selectOne);
document.querySelector('#item4').addEventListener('click', selectOne);
document.querySelector('#item5').addEventListener('click', selectOne);

function selectOne() {
    document.querySelector('.user-rating').innerText = 1;
}

*/