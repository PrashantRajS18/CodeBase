

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

let snumber = Math.trunc(Math.random() * 20 )+ 1;
// console.log(snumber);


let score = 20;
let highscore =0;

document.querySelector('.check').addEventListener
('click',function(){
   const guess = Number( document.querySelector('.guess').value);
   console.log(guess);
   if(!guess){
    document.querySelector('.message').textContent = 'No number';
   }
   else if(guess === snumber){
    document.querySelector('.message').textContent =  '😎 Correct number';
    document.querySelector('.number').textContent = snumber;
    document.querySelector('.container').style.backgroundColor = '#66ff33';
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }

   }else if(guess > snumber){
       if(score > 1){
        document.querySelector('.message').textContent = '😒 too high number';
        score--;
        document.querySelector('.score').textContent = score;
       }else{
        document.querySelector('.message').textContent = '☹ you lose the game ! try again';
       }
   }else if(guess < snumber){
    if(score > 1){
        document.querySelector('.message').textContent = '😒 too low number';
        score--;
        document.querySelector('.score').textContent = score;
       }else{
        document.querySelector('.message').textContent = '☹ you lose the game ! try again';
       }
   }
}) ;

//again btn 
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    snumber = Math.trunc(Math.random() * 20 )+ 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = '🤔 start quessing .. ?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '' ;
    document.querySelector('.container').style.backgroundColor = '#7fffd4';


})



