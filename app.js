'use strict';

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