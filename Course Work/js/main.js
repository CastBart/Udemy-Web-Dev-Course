let myBtn = document.getElementById("go-button");
const myArr = [];

function buttonClicked(){
    console.log("Button Clicked");
    let text = document.getElementsByClassName("my-input")[0].value;
    let result = document.getElementById("text");
    let textArea = document.getElementsByClassName("my-textarea")[0].value;

    console.log(text);
    result.innerHTML = "Hello, "+ text + "<br />";
    result.innerHTML += "Message: " + textArea;


    
}



myBtn.addEventListener("click", buttonClicked);