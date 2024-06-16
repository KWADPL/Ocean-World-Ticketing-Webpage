const h1 = document.querySelector("h1");
h1.addEventListener("click", changeColor);
h1.removeEventListener("click", changeColor);
const div = document.getElementById("ocean");
const body = document.querySelector("body");
const infodiv = document.getElementById("info");
const infobtn = document.getElementById("getinfo");
const bookbtn = document.getElementById("book");
const bookdiv = document.getElementById("form");
const tickets = document.getElementById("tickets");
const h4 = document.querySelector("h4");
const preference = document.getElementById("preference");
const secondH4 = document.getElementById("secondH4");

preference.onchange = function(){
    secondH4.innerText = "Your preference is : " + preference.value;
}

tickets.oninput = function(){
    h4.innerText = "You are purchasing " + tickets.value + " tickets.";
}

bookbtn.onclick = function(){
    bookdiv.style.visibility = "visible";
}


infobtn.onclick = function(){
    infodiv.style.visibility = "visible";
};

body.onscroll = function(){
    body.style.backgroundColor = "#b2f0f1";
    div.style.backgroundColor = "#b2f0f1";
};

function changeColor(){
    h1.style.color = "darkturquoise";
}