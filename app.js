'use strict';
let totalScore = 0;
let userName;
while (userName === undefined) {
  userName = prompt("Welcome, My name is Kyrillos but much easier to call me Kero, Who are you?");
  if (userName === null) {
    alert("so secretive, I guess we'll keep it that way! Later!");
    break;
  } else if (userName) {
    alert('Hello, Bonjour, Hola, Zdravstvuyte, Nǐn hǎo, Salve, Konnichiwa, Guten Tag, Olá: ' + userName.toUpperCase() + '!  Thanks for taking the time to check out my page, much love!');
  } else {
    alert("Could not comprehend, my bad..");
  }
};

function guessingGame() {

  if (userName === null) { 
    userName = "Anonymous";
  };
  questions()
  };

  // global variables
let userInput; // changed the name to userInput
let responseString = ''; //responseString

function questions() {
    
    const askUserQuestions = [ 
        {
          question: 'Have i lived in America all my life? (Y/N)',
          answer: 'Y',
          response: 'Even though my ethnicity is Egyptian, I have lived in America all my life. Fun fact though, I have visted Egypt in 1999. '
        },
        {
          question: 'Do I speak and understand more than one language?  (Y/N)',
          answer: 'Y',
          response: 'I also can speak and understand Arabic.'
        },
        {
          question: 'Do I travel a lot? (Y/N)',
          answer: 'N',
          response: 'I would love to travel all over the world if I could, hopefully one day I will be able to do exactly just that!'
        },
        {
          question: 'Do I know how to dance? (Y/N)',
          answer: 'N',
          response: 'I would love to learn how to dance, two-step in particular.'
        },
        {
          question: 'Do I have any sibblings? (Y/N)',
          answer: 'Y',
          response: 'I have one older brother but unfortunatley we lost touch 14 years ago :( '
        }

        
        
      ];

      for (let i = 0; i < askUserQuestions.length; i++) {
        userInput = prompt(askUserQuestions[i].question);
        userInput = userInput.toUpperCase();
        if (userInput === askUserQuestions[i].answer) { 
          responseString = "Correct! ";
          totalScore += 1;
        } else if (userInput === null) {
          break; 
        } else { 
          responseString = "Incorrect! ";
        }
        responseString += askUserQuestions[i].response; 
        alert(responseString);
    } 
    //console.log('wow! I'm so thankful you took the time learn more about me: ' + userName.toUpperCase());
    alert('wow! Im so thankful you took the time learn more about me: ' + userName.toUpperCase());

}
document.getElementById("begin").addEventListener("click", guessingGame);

function userGuessingGame(){
  const correctAnswer = 9;
  let userLives = 4;
  let userAnswer;
  while (userLives > 0){
      userAnswer = prompt("Guess a number between 1 and 100");
      if(userAnswer < correctAnswer){
          alert('too low');
          userLives -= 1
      } 
      else if(userAnswer > correctAnswer){
          alert('too high');
          userLives -= 1
      } 
      else if(userAnswer == correctAnswer){
          alert(`You got it right! the correct answer is: ${correctAnswer}`);
          totalScore += 1
          break;
      }
      else {
          alert('This is an invalid input');
      } 
      if(userLives === 0){
        alert(`You ran out of lives! ${correctAnswer}`);
        break;
    }
  }
}
userGuessingGame();

function guessQuestion()
{
    let numberOfAttempts = 0;
    let correct = true;
    while (numberOfAttempts < 6 && correct)
    {
        let userAnswer = prompt("Try guessing one of the 10 things that I like?");
        let topTen = ['my dog', 'shows', 'movies', 'computers', 'coding', 'car shows', 'harry potter', 'music', 'anime', 'vaping'];
        for (let i = 0; i < topTen.length; i++)
        {
            if(userAnswer.toLowerCase() == topTen[i])
            {
                alert('You got it right.');
                correct = false;
                totalScore += 1;
                break;
            }
        }
        
        if(correct)
        {
            numberOfAttempts++;
            alert('Sorry try again!');
        }
    }
}
guessQuestion();

alert(`Your total score is: ${totalScore}`)