let storyopening = document.querySelector(".story-opening");
let option1 = document.querySelector(".option-1");
let option2 = document.querySelector(".option-2");
let optionOneScreen = document.querySelector(".option-one-screen");
let optionTwoScreen=document.querySelector(".option-two-screen");
let continue1=document.querySelector(".continue");
let continue2=document.querySelector(".continue");
let optionOneEnd=document.querySelector(".option-one-end");
let optionTwoEnd=document.querySelector(".option-two-end");

option1.onclick = function() {
    optionOneScreen.style.display = "block";
    storyopening.style.display = "none";

};

option2.onclick = function() {
    optionTwoEnd.style.display="none";
    optionTwoScreen.style.display = "block";
};

continue1.onclick = function() {
    optionOneEnd.style.display = "block";
   optionOneScreen.style.display = "none";

};


continue2.onclick = function() {
    optionTwoEnd.style.display = "block";
   optionOneScreen.style.display = "none";

};