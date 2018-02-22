var infoSection = document.getElementById('info');
infoSection.addEventListener('click',infoActive);
document.addEventListener('click',infoActive);
var infoItems = document.getElementsByClassName("info-item");
var tmpelem,start = false;
var subForm = document.querySelector(".subscribe");
var regTrial = document.querySelector(".register");
var loginBtn = document.querySelector(".login-btn");
var regBtn = document.querySelector(".reg-btn");
subForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  disabled();
});
regTrial.addEventListener("submit",(e)=>{
  e.preventDefault();
  disabled();
});
loginBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  disabled();
});
regBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  disabled();
});


function infoActive(event) {

if (start) {

  for (let i = 0; i < tmpelem.children.length; i++) {
    tmpelem.children[i].classList.toggle('hidden');
    }
    start = false;
}

infoSection.classList.remove("info-section-shadowed");
for (let i = 0; i < infoItems.length; i++) {
  infoItems[i].classList.remove("info-item-active");
}

  if (event.target.classList[event.target.classList.length-1] == 'info'||
  event.target.classList[event.target.classList.length-2] == 'info'){

infoSection.classList.add("info-section-shadowed");
tmpelem = searchElement(event.target);
tmpelem.classList.toggle('info-item-active');
tmpelem = tmpelem.children[0];
for (let i = 0; i < tmpelem.children.length; i++) {
  tmpelem.children[i].classList.toggle('hidden');
  }
  start = true;
  }

}


function searchElement(elements) {

   if(elements.className == "info-item info"){ return elements;}
   else if(elements.parentNode)
   {return searchElement(elements.parentNode);}
   else{return tmpelem;}

}

function disabled(){
    alert("This is a static site without a server side, so registration and subscription is disabled");
}
