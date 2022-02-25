let myBtn = document.getElementById("go-button");

function buttonClicked(){
    console.log("Button Clicked");
    myBtn.removeEventListener("click", buttonClicked);
    document.getElementById("text").innerHTML = "I changed the value stored in this element";
    console.log(document.getElementById("text").innerHTML);

}


myBtn.addEventListener("click", buttonClicked);