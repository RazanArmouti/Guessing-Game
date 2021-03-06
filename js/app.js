'use strict';
let jupiterName, coffee, tennis, shoeSize, twin, guessNo, guessNoCounter, guessCoffe, guessCofeeCounter, coffeArray, finalScore;
let guestName = prompt('What is your name?');
alert('Greeting ' + guestName + ' A very warm welcome to you! You are a wonderful person with a wonderful view of life. It is lovely to have you among us!');
alert('Hey ' + guestName + '! We’re so excited you are a member of our game. We love all our members, and that includes you too! Enjoy & spread the love. We start the game!');
document.write('<div id=\'imgDiv\'><img src=\'./img/welcome-message.jpg\' alt=\'Wlc Pic\'></div>');
document.write('<div id=\'msgDiv\'><p><h2> Hey ' + guestName + '! We’re so excited you are a member of our game. We love all our members, and that includes you too! Enjoy & spread the love.</h2></p></div>');

finalScore = 0;


function jupiterQ(jupiterName) {


  switch (jupiterName) {
  case 'no':
  case 'n':
    finalScore++;
    console.log(finalScore);

    alert('My name is also far from Jupiter');
    break;
  case 'yes':
  case 'y':

    alert('Great, Your name is beautiful');
    break;

  }

}
function coffeeQ(coffee) {

  switch (coffee) {
  case 'no':
  case 'n':

    alert('What are you waiting for? Go get your coffe cup');
    break;
  case 'yes':
  case 'y':
    finalScore++;
    console.log(finalScore);
    alert('Great, Coffee is my favorite drink');
    break;
  }

}
function tennisQ(tennis) {

  switch (tennis) {
  case 'no':
  case 'n':
    alert('Try practicing it. It\'s so much fun');
    break;
  case 'yes':
  case 'y':
    finalScore++;
    console.log(finalScore);
    alert('Great, Tennis is one of my favorite sports too');
    break;
  }

}
function shoeSizeQ(shoeSize) {

  switch (shoeSize) {
  case 'no':
  case 'n':

    alert('It seems that you belong to the males and not the females');
    break;
  case 'yes':
  case 'y':
    finalScore++;
    console.log(finalScore);

    alert('Great, The perfect size for women\'s shoes');
    break;
  }

}
function twinQ(twin) {

  switch (twin) {
  case 'no':
  case 'n':
    finalScore++;
    console.log(finalScore);

    alert('Great, Twins are rare. You are unique as me');
    break;
  case 'yes':
  case 'y':

    alert('So beautiful!');
    break;
  }

}
function guessNoQ(guessNo) {

  guessNoCounter = 1;
  while (Number(guessNo) !== 7 && guessNoCounter < 4) {
    guessNoCounter++;

    if (Number(guessNo) < 7) {
      guessNo = prompt('Please try again, your number is too low');
    }
    else {
      guessNo = prompt('Please try again, your number is too high');
    }

  }

  if (Number(guessNo) === 7) {
    finalScore++;
    console.log(finalScore);
    alert('Congratulations! You guessed the right number ~ 7');
  }
  else {
    alert('Good luck, Unfortunately the right number is 7');
  }

}
function guessCoffeQ(guessCoffe) {

  guessCofeeCounter = 1;
  coffeArray = ['Black Coffee', 'Latte', 'Cappuccino', 'Americano', 'Cortado', 'Espresso'];

  while (guessCoffe !== coffeArray[0].toLocaleLowerCase() &&
    guessCoffe !== coffeArray[1].toLocaleLowerCase() &&
    guessCoffe !== coffeArray[2].toLocaleLowerCase() &&
    guessCoffe !== coffeArray[3].toLocaleLowerCase() &&
    guessCoffe !== coffeArray[4].toLocaleLowerCase() &&
    guessCoffe !== coffeArray[5].toLocaleLowerCase() &&
    guessCofeeCounter < 6
  ) {
    guessCofeeCounter++;
    guessCoffe = prompt('Please try again to guess what my favorte hot coffe?').toLocaleLowerCase();
  }

  if (guessCoffe === coffeArray[0].toLocaleLowerCase() ||
    guessCoffe === coffeArray[1].toLocaleLowerCase() ||
    guessCoffe === coffeArray[2].toLocaleLowerCase() ||
    guessCoffe === coffeArray[3].toLocaleLowerCase() ||
    guessCoffe === coffeArray[4].toLocaleLowerCase() ||
    guessCoffe === coffeArray[5].toLocaleLowerCase()
  ) {
    finalScore++;
    console.log(finalScore);
    alert('Congratulations! You guessed one type of my favorte hot coffe ' + guessCoffe);
  }
  else {
    alert(`Good luck, Unfortunately My favorte hot coffe list is ${coffeArray[0]}, ${coffeArray[1]}, ${coffeArray[2]}, ${coffeArray[3]}, ${coffeArray[4]}, ${coffeArray[5]}`);

  }

}


jupiterName = prompt('Did you name one of Jupiter\'s moons? Yes/No').toLocaleLowerCase();
jupiterQ(jupiterName);

coffee = prompt('Do you drink coffee? Yes/No').toLocaleLowerCase();
coffeeQ(coffee);

tennis = prompt('Will you play tennis this year? Yes/No').toLocaleLowerCase();
tennisQ(tennis);

shoeSize = prompt('Is your shoe size 38? Yes/No').toLocaleLowerCase();
shoeSizeQ(shoeSize);


twin = prompt('Do you have a twin? Yes/No').toLocaleLowerCase();
twinQ(twin);

guessNo = prompt('Now kindly guess a number I have it and insert it in the box');
guessNoQ(guessNo);

guessCoffe = prompt('Try to guess what my favorte hot coffe?').toLocaleLowerCase();
guessCoffeQ(guessCoffe);

console.log(finalScore);
alert(`The total number of your correct answers is ${finalScore}`);
