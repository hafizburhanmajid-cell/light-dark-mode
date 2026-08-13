const theme=document.getElementById("themeBtn");
const body=document.querySelector("body");
const card=document.getElementById("card");
const heading=document.getElementById("heading");
const para=document.getElementById("para");
theme.addEventListener("click",function(){
    body.classList.toggle("bg-gray-400");
    body.classList.toggle("bg-gray-900");
    card.classList.toggle("bg-white");
    card.classList.toggle("bg-gray-600");
    heading.classList.toggle("text-gray-800");
    heading.classList.toggle("text-white");
    para.classList.toggle("text-gray-600")
    para.classList.toggle("text-gray-300")
});