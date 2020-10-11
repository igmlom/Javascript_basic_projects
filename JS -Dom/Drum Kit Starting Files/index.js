var btn = document.querySelectorAll(".drum");
var a = new Audio("sounds/crash.mp3");
var s = new Audio("sounds/kick-bass.mp3");
var d = new Audio("sounds/snare.mp3");
var f = new Audio("sounds/tom-1.mp3");
var j = new Audio("sounds/tom-2.mp3");
var k = new Audio("sounds/tom-3.mp3");
var l = new Audio("sounds/tom-4.mp3");





btn.forEach(element => {
    element.addEventListener("click", function () {
        var thisButton = this.innerHTML;
        makeSound(thisButton);
        makeAnimation(thisButton);
    })
});

document.addEventListener('keydown', function (event){
    makeSound(event.key);
    makeAnimation(event.key);

});


// function makeSound (ev){
//     switch (ev) {
//         case "a":
//             a.play();
//             break;
//         case "s":
//             s.play();
//             break;
//         case "d":
//             d.play();
//             break;
//         case "f":
//             f.play();
//             break;
//         case "j":
//             j.play();
//             break;
//         case "k":
//             k.play();
//             break;
//         case "l":
//             l.play();
//             break;
//         default: console.log(ev);
//     }
// }


// this is doing the same as the 25 previos rows.
function makeSound (ev){
    if(window[ev]){
        window[ev].play();
    }
}


function makeAnimation(p){
    var activeBtn = document.querySelector('.'+p);
    activeBtn.classList.add('pressed');
    setTimeout(() => {
       activeBtn.classList.remove('pressed'); 
    }, 100);
}