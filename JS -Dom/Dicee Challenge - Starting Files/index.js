var player1 = document.querySelector('.img1');
var player2 = document.querySelector('.img2');
var btn = document.querySelector('.container h1');



btn.addEventListener("click", function cc(){
    var rdm = Math.floor(Math.random()*6)+1;
    var rdm2 = Math.floor(Math.random()*6)+1;
player1.setAttribute('src', "images/dice"+rdm+".png")
player2.setAttribute('src', "images/dice"+rdm2+".png")

if(rdm>rdm2){
    btn.innerHTML ="Player 1 won!"
}else if(rdm2>rdm){
    btn.innerHTML ="Player 2 won!"
}
 else {
    btn.innerHTML ="Draw!"
}
})