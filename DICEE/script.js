///////      P1      ///////


var dice1 = Math.floor(Math.random(1)*6+1);

if (dice1===1) {
        document.querySelector(".img1").src="images/dice1.png";
}
else if (dice1===2) {
        document.querySelector(".img1").src="images/dice2.png";
}
else if (dice1===3) {
        document.querySelector(".img1").src="images/dice3.png";
}
else if (dice1===4) {
        document.querySelector(".img1").src="images/dice4.png";
}
else if (dice1===5) {
        document.querySelector(".img1").src="images/dice5.png";
}
else {
    document.querySelector(".img1").src="images/dice6.png";
}


////////        P2       ///////

var dice2 = Math.floor(Math.random(1)*6+1);

if (dice2===1) {
        document.querySelector(".img2").src="images/dice1.png";
}
else if (dice2===2) {
        document.querySelector(".img2").src="images/dice2.png";
}
else if (dice2===3) {
        document.querySelector(".img2").src="images/dice3.png";
}
else if (dice2===4) {
        document.querySelector(".img2").src="images/dice4.png";
}
else if (dice2===5) {
        document.querySelector(".img2").src="images/dice5.png";
}
else {
    document.querySelector(".img2").src="images/dice6.png";
}


///////     WINNER      ///////

if (dice1>dice2) {
    document.querySelector("h1").innerHTML=("PLAYER 1 WON");
}
else if (dice1===dice2) {
    document.querySelector("h1").innerHTML=("TIE");
}
else {
    document.querySelector("h1").innerHTML=("PLAYER 2 WON");
}
