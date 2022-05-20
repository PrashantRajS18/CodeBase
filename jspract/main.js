

// //Project one 


// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct number';
// document.querySelector('.number').textContent = 5;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value ;
// console.log(document.querySelector('.guess').value);

//event is anything happen on click or on hover 
// we add event listener so we can wait for certian event tpo happen 
//it react to it
//to get the random number
let snumber = Math.trunc(Math.random() * 20 )+ 1;
// console.log(snumber);

// made variable for score and highscore
let score = 20;
let highscore =0;
//event for click on check btn for to start game
document.querySelector('.check').addEventListener
('click',function(){
   const guess = Number( document.querySelector('.guess').value);
   console.log(guess);
   //to check the if guess is not input
   if(!guess){
    document.querySelector('.message').textContent = 'No number';
   }
   //to check if number is equal to secret number
   else if(guess === snumber){
    document.querySelector('.message').textContent =  '😎 Correct number';
    document.querySelector('.number').textContent = snumber;
    document.querySelector('.container').style.backgroundColor = '#66ff33';
    //check if score is greater than highscore then highscore is equal to new score
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
    //to check if number is greater than sec num
   }else if(guess > snumber){
       //if no. is > sec no  then sub score by 1 
       if(score > 1){
        document.querySelector('.message').textContent = '😒 too high number';
        score--;
        document.querySelector('.score').textContent = score;
       }else{
        document.querySelector('.message').textContent = '☹ you lose the game ! try again';
       }
       //to check if number is lower than sec num
   }else if(guess < snumber){
       //if no. is > sec no  then sub score by 1 
    if(score > 1){
        document.querySelector('.message').textContent = '😒 too low number';
        score--;
        document.querySelector('.score').textContent = score;
       }else{
        document.querySelector('.message').textContent = '☹ you lose the game ! try again';
       }
   }
}) ;

//again btn  added again eventlistner and resetting the values to its initial except highscore
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    snumber = Math.trunc(Math.random() * 20 )+ 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = '🤔 start quessing .. ?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '' ;
    document.querySelector('.container').style.backgroundColor = '#7fffd4';


})



