const nextBTN = document.querySelector('.b');
const prevBTN = document.querySelector('.b2');
const para = document.querySelector('.para1');

let texts = [
  "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
  "This is my website",
  "Cars diagnosis system",
  "Made by Amir"
];

const cir1 = document.querySelector('.circle:nth-of-type(1)');
const cir2 = document.querySelector('.circle:nth-of-type(2)');
const cir3 = document.querySelector('.circle:nth-of-type(3)');
const cir4 = document.querySelector('.circle:nth-of-type(4)');

const cirs = [cir1,cir2,cir3,cir4];

let index = 0;

function updateText(){
  document.querySelector(".para1").innerText = texts[index];
   if(index === 0){
      prevBTN.style.backgroundColor = "grey";
      prevBTN.style.color = "black";
  }else{
      prevBTN.style.backgroundColor = "white";
      prevBTN.style.color = "rgb(0, 63, 105)";
  }

  if(index === texts.length - 1){
      nextBTN.style.backgroundColor = "grey";
      nextBTN.style.color = "black";
  }else{
      nextBTN.style.backgroundColor = "white";
      nextBTN.style.color = "rgb(0, 63, 105)";
  }
  updateCircles();
}

function updateCircles(){

    for(let i = 0; i < cirs.length; i++){
        cirs[i].style.backgroundColor = "grey";
    }

    cirs[index].style.backgroundColor = "rgb(0,63,105)";
}

function nextText(){
    if(index < texts.length-1){
        index++;
        updateText();
    }
}


function prevText(){
  if(index > 0){
        index--;
        updateText();
}
}
 let icon1 = document.querySelector('.icons:nth-of-type(1)');
 let icon2 = document.querySelector('.icons:nth-of-type(2)');
 let icon3 = document.querySelector('.icons:nth-of-type(3)');

icon1.addEventListener('click',()=>{
    alert('Snapchat: amir717sd');
})
icon2.addEventListener('click',()=>{
    alert('Instagram: amir717sd');
})
icon3.addEventListener('click',()=>{
    alert('Whatsapp: 0544225320');
})
let btnC1 = document.querySelector('#c1');
let btnBox = document.querySelector('#box');
let btnProject = document.querySelector('#project');

function goToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}