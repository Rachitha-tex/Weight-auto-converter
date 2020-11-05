const numberInput=document.querySelector("#numberInput");
const grams=document.querySelector("#grams");
const kilograms=document.querySelector("#kilograms");
const ounce=document.querySelector("#ounce");


document.querySelector("#output").style.visibility="hidden";

document.addEventListener('input',weightConvert);
function weightConvert(){
    document.querySelector("#output").style.visibility="visible";
    let num=numberInput.value;
grams.innerHTML=num*453.92;
kilograms.innerHTML=num*0.453592;
ounce.innerHTML=num*16;


}