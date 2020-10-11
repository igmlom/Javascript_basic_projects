// Elements Selecting
const input = document.querySelector("#inp");
const submit = document.querySelector("#sbm");

// dinamic elements
const dinamic = document.querySelector(".dinamic");
const counter = document.querySelector(".counter");
const bigSmall = document.querySelector(".bigSmall");
const trueFalse = document.querySelector(".trueFalse");
//gameOver resetBtn

const resetBtn = document.createElement("button");
resetBtn.className = "resetButton";
resetBtn.innerHTML = "start over";


let rdm100 = Math.floor(Math.random() * 100 + 1);

//  val;
let trying = 1;

console.log("The random number is " + rdm100);



input.focus();

submit.addEventListener("click", guess);


function guess() {
    let val = Number( input.value);
    console.log("you typed " + val);
    if (trying === 1) {
        counter.textContent = "You tried the numbers: ";
    }
    counter.textContent += val + "  ";

    if (val === rdm100) {
        trueFalse.style.color = "green";
        trueFalse.textContent = "Success !!!";
        bigSmall.textContent = "";
        gameOver();
    } else if (trying === 10) {
        trueFalse.textContent = "Game over, Hit the button to start again";
        bigSmall.textContent = "";
        gameOver();
    } else {
        trueFalse.style.color = "red";
        trueFalse.textContent = "Failure !";
        if (val > rdm100) {
            bigSmall.textContent = "Two big!";
        } else {
            bigSmall.textContent = "Two small !";

        }
    }

    input.value = "";
    trying++;
    input.focus();

}



function gameOver() {
    dinamic.appendChild(resetBtn);
    submit.disabled = true;
    input.disabled = true;
    resetBtn.addEventListener("click", resetGame)
}

function resetGame() {
    trying = 1;
    submit.disabled = false;
    input.disabled = false;
    trueFalse.textContent = "";
    counter.textContent = "";
    val = "";
    resetBtn.parentNode.removeChild(resetBtn);
    rdm100 = Math.floor(Math.random() * 100 + 1);
    console.log("New Random number is " + rdm100);
    input.focus();

}