/*************************
 * COUNTER
 */

const buttonLow = document.querySelector(".prevBtn");
const buttonAdd = document.querySelector(".nextBtn");
let count = 0;

buttonLow.addEventListener('click', function(){
  count--;
  counter.textContent = count;
  changeColor();
});

buttonAdd.addEventListener('click', function(){
  count++;
  counter.textContent = count;
  changeColor();
});

function changeColor () {
  const counter = document.getElementById("counter");

  if (count < 0 ){
    counter.style.color = "red";
  } else if (count > 0){
    counter.style.color = "green";
  } else {
    counter.style.color = "#333333"; // dark grey
  }
};


  





