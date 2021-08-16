
let wonPoint = 0;
let lostPoint = 0;

for(i=0; i<5; i++){
    let guessNumber = parseInt(prompt("Enter your Guess Number from 1-5: "));
    let randomNum = Math.floor(Math.random() * 5) + 1;

    if(guessNumber == randomNum){
        // console.log("You Won");
        wonPoint++;
        rightNum = "Your Guess Number Was: " + guessNumber;
    }else{
        // console.log("You Lost");
        lostPoint++;
    }

}


document.write("You Won Total of " + wonPoint + " Time. <br>");
document.write("You Lost Total of " + lostPoint + " Time. <br>");
document.write(rightNum);



















