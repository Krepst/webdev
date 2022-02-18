
for(i=0; i<document.querySelectorAll(".drum").length; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function() {

 var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
})
}
  

document.addEventListener("keydown", function(event) {

    makeSound(event.key);

})


function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 =  new Audio("sounds/tom-1.mp3");
            tom1.play();
            document.querySelector(".w").classList.toggle("pressed");
            break;
         case "a":
             var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
             document.querySelector(".a").classList.toggle("pressed");
             break;
         case "s":
             var tom3 = new Audio("sounds/tom-3.mp3");
             tom3.play();
             document.querySelector(".s").classList.toggle("pressed");
             break;
         case "d":
             var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
             document.querySelector(".d").classList.toggle("pressed");
             break;
         case "j":
             var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
             document.querySelector(".j").classList.toggle("pressed");
             break;
         case "k":
             var snare = new Audio("sounds/snare.mp3");
             snare.play();
             document.querySelector(".k").classList.toggle("pressed");
             break;
         case "l":
             var crash = new Audio("sounds/crash.mp3");
             crash.play();
             document.querySelector(".l").classList.toggle("pressed");
             break;
    
        default: console.log(key);
            break;
    }
}


