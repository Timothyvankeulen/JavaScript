var plaatjes = [1, 2, 3];
var teller = 0;
var slideholderEyes = document.getElementById("slideholderEyes");
slideholderEyes.style.backgroundImage = "url('../Opdracht3/img/MonkeyEyes1.png')";

slideholderEyes.addEventListener("click", function (){
    slideholderEyes.style.backgroundImage = "url('../Opdracht3/img/MonkeyEyes" + getAap() + ".png')";
});

var slideholderNose = document.getElementById("slideholderNose");
slideholderNose.style.backgroundImage = "url('../Opdracht3/img/MonkeyNose1.png')";

slideholderNose.addEventListener("click", function (){
    slideholderNose.style.backgroundImage = "url('../Opdracht3/img/MonkeyNose" + getAap() + ".png')";
});

var slideholderMouth = document.getElementById("slideholderMouth");
slideholderMouth.style.backgroundImage = "url('../Opdracht3/img/MonkeyMouth1.png')";

slideholderMouth.addEventListener("click", function (){
    slideholderMouth.style.backgroundImage = "url('../Opdracht3/img/MonkeyMouth" + getAap() + ".png')";
});

function getAap(){
    if(teller >= plaatjes.length){
        teller = 1;
    }
    else {
        teller++;
    }
    console.log(teller);
    return teller;
}