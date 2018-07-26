function randomNumberGenerator() {
    let randomNumber = Math.floor((Math.random()*100)+1);
    return randomNumber;
}
randomNumber = randomNumberGenerator();


let button = document.getElementById('button');
let button2 = document.getElementById('button2');
let infoHead = document.getElementById('infoHead');
let infoBody = document.getElementById('infoBody');
let priceWonContent = document.getElementById('priceWon');


let message = [ 
    'OBJECTIVE',
    'A random number has been choosen between 1 and 100. Can you guess it in 10 trials?',
    'Please input a Number between 1 - 100 !!',
    'GREAT GUESS',
    'WRONG GUESS',
    'Guess too high go Lower',
    'Guess too low go Higher',
    'Guess out of Range... Enter a Number between 1-100.',
    'You got the Lucky Number in ',
    'YOU LOSE !!!'
]; 
let priceWon = [ 
    'King Octopus',
    'Mr Pastor !!!',
    'Small prophet !!',
    'wizard of oz !!',
    'Mr Merlin !!',
    'Monkey De Lufy !!!',
    'Sorcerer !!!',
    'Mr Path-Finder !!!',
    'Mutant Brain Power!!',
    'You are Human !!!'
]; 
infoHead.textContent = `${message[0]}`;
infoBody.textContent = `${message[1]}`;
let total = 1;
button.addEventListener('click',function (){
    
//     console.log("total = ", total);
    
    let userInput = Number(document.getElementById('guess_input').value);
    // this.style.color = 'red';
    while(total < 11){
           
            if(!(isNaN(userInput))) {
                // infoHead.classList.add("animated","shake","delay-4s","shadow-failure");
                                
//                 console.log("random =",randomNumber);
                    if(userInput === randomNumber) {
                        infoHead.textContent = `${message[3]}`;
                        infoBody.textContent = `${message[8]} ${total} trials`;
                        this.classList.add("c","animated","rubberBand","delay-4s");
                        infoHead.classList.remove("animated","shake","delay-4s","shadow-failure");
                        infoHead.classList.add("c","animated","tada","delay-4s","shadow-success");
                        this.disabled = true;
                        let userInput =document.getElementById('guess_input');
                        userInput.value = "";
                        priceWonContent.textContent = `${priceWon[total-1]}`;
                        priceWonContent.classList.add("priceWon");
                        break;
                    }
                    
                    else if(userInput !== randomNumber) {
                        infoHead.classList.add("animated","shake","delay-4s","shadow-failure");
                        infoHead.textContent = `${message[4]}`;
                            if((userInput > randomNumber) && (userInput < 101)) {
                                infoBody.textContent = `${message[5]} , ${(10 - total)} trials remaining`;
                            }
                            else if((userInput < randomNumber) && (userInput > 0)) {
                                infoBody.textContent = `${message[6]} , ${(10 - total)} trials remaining`;
                            }
                            else if((userInput < 1) || (userInput >100)) {
                                infoBody.textContent = `${message[7]} , ${(10 - total)} trials remaining`;
                            }
                            break
                            
                    }
                    
            }
            else  {
                    infoBody.textContent = `${message[2]}`;
                    break;
                }
        }
        total+=1;
        if(total>11){
            infoHead.textContent = `${message[9]}`;
            infoBody.textContent = "Play Again ?";
            this.disabled = true;
        }
        
});

button2.addEventListener('click',function(){
    total = 1;
    button.disabled = false;
    button.classList.remove("c","animated","rubberBand","delay-4s");
    infoHead.classList.remove("c","animated","tada","delay-4s","shadow-success");
    infoHead.classList.remove("animated","shake","delay-4s","shadow-failure");
    priceWonContent.textContent = "";
    priceWonContent.classList.remove("priceWon");
    randomNumber = randomNumberGenerator();
    infoHead.textContent = `${message[0]}`;
    infoBody.textContent = `${message[1]}`;
    let userInput =document.getElementById('guess_input');
    userInput.value = "";

});

