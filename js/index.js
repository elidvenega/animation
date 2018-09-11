let x = document.getElementById("myDIV");

// Standard syntax
x.addEventListener("animationstart", myStartFunction);

function myStartFunction(event) {
  this.innerHTML;
}


//second one
let two = document.getElementById("second");

// Standard syntax
two.addEventListener("animationstart", myStart);

function myStart(event) {
  this.innerHTML;
}


//third one
let third = document.getElementById("third");

// Standard syntax
third.addEventListener("animationstart", animation);

function animation(event) {
  this.innerHTML;
}
