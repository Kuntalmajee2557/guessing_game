let max = prompt("enter the maximum limit");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the number");
while(true){
    
    if(guess == "quit"){
        alert("quited");
        break;
    }
    if(guess == random){
        alert("you are right");
        break;
    }
    else if(guess < random){
        guess = prompt("your guess is small");
    }
    else{
        guess = prompt("your guess is big");
    }
}
