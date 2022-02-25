let myBtn = document.getElementById("go-button");

function buttonClicked(){
    console.log("Button Clicked");
    myBtn.removeEventListener("click", buttonClicked);
}


myBtn.addEventListener("click", buttonClicked);