const text = [
    "Software Engineer",
    "Java Developer",
    "Spring Boot Developer",
    "Web Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type, 150);

})();

function showMessage(){
    alert("Thank you for visiting my portfolio!");
}

function contactMessage(){
    alert("Message Sent Successfully!");
}

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 200 ||
       document.documentElement.scrollTop > 200){

        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};