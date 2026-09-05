const a = Math.floor(Math.random()*100)+1;
let b;
let count = 1
b = Number(prompt("enter your guess"))
while (b!=a) { 
    if(b<a) {
        b = prompt("its too low. ");
    } else if (b>a) {
        b = prompt("its very high. ");
    } else {
        b = prompt(" correct guess!! ");
        break
    }
    count++;
}   

let score = 100 - count
alert("congratulations you guessed it in " + count + " tries and your score is " + score);

const screen = document.getElementById("screen");
screen.innerHTML = `<h2> Congratulations you guessed it in ${count} tries and your score is ${score} </h2>`