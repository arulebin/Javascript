let n1= Math.random();
let n2= Math.random();
n1= Math.floor(n1*6) + 1;
n2= Math.floor(n2*6) + 1;
document.querySelector(".img1").setAttribute("src", `./images/dice${n1}.png`);
document.querySelector(".img2").setAttribute("src", `./images/dice${n2}.png`);
if (n1===n2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(n1>n2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}