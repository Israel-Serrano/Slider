var foto;
var backButton;
var forwardButton;
var radioButtons;
var time = 3000;
var actualImg = 0;
var intervalId;

function iniVar(){
    backButton = document.getElementById("back");
    forwardButton = document.getElementById("forward");
    radioButtons = document.getElementsByName("keypad")
    foto = document.getElementById("foto");
    radioButtons[0].checked = true;
    intervalId = setInterval(nextPhoto, time);    
}

function iniListen(){
    backButton.addEventListener("click",prevPhoto);    
    forwardButton.addEventListener("click",nextPhoto);
    for(let i = 0; i < radioButtons.length; i++){
        radioButtons[i].addEventListener("click", updateRadioImg);
    }
}

function prevPhoto(){
    actualImg--;
    changeImg();
}

function nextPhoto(){
    actualImg++;
    changeImg();
}

function changeImg(){
    clearInterval(intervalId);
    if(actualImg == radioButtons.length){
        actualImg=0;
    }
    if(actualImg == -1){
        actualImg = radioButtons.length -1;
    }
    foto.src = "img/" + actualImg + ".jpg";
    radioButtons[actualImg].checked = true;
    intervalId = setInterval(nextPhoto, time);
}

function updateRadioImg(){
    for(let i = 0; i < radioButtons.length; i++){
        if(radioButtons[i].checked){
            actualImg = i;
            break;
        }
    }
    changeImg();
}

window.addEventListener("load", () =>{

    iniVar();
    
    iniListen();    
});