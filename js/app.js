'use strict';
let jupiterName, coffee, tennis, shoeSize, twin;
let guestName= prompt('What is your name?');
alert('Greeting '+guestName+' A very warm welcome to you! You are a wonderful person with a wonderful view of life. It is lovely to have you among us!');
alert('Hey '+ guestName +'! We’re so excited you are a member of our game. We love all our members, and that includes you too! Enjoy & spread the love. We start the game!');
document.write('<div id=\'imgDiv\'><img src=\'./img/welcome-message.jpg\' alt=\'Wlc Pic\'></div>');
document.write('<div id=\'msgDiv\'><p><h2> Hey '+ guestName +'! We’re so excited you are a member of our game. We love all our members, and that includes you too! Enjoy & spread the love.</h2></p></div>');

jupiterName = prompt('Did you name one of Jupiter\'s moons? Yes/No').toLocaleLowerCase();
switch (jupiterName ) {
case 'no':
case 'n':
  //console.log("No, Correct answer");
  alert ('My name is also far from Jupiter');
  break;
case 'yes':
case 'y' :
  //console.log("Yes, Uncorrect answer");
  alert ('Great, Your name is beautiful');
  break;

}
coffee = prompt('Do you drink coffee? Yes/No').toLocaleLowerCase();
switch (coffee){
case 'no':
case 'n':
//console.log("No, Uncorrect answer");
  alert('What are you waiting for? Go get your coffe cup');
  break;
case 'yes':
case 'y' :
  //console.log("Yes, Correct answer");
  alert('Great, Coffee is my favorite drink');
  break;
}

tennis = prompt('Will you play tennis this year? Yes/No').toLocaleLowerCase();
switch (tennis){
case 'no':
case 'n':
  //console.log("No, Uncorrect answer");
  alert('Try practicing it. It\'s so much fun');
  break;
case 'yes':
case 'y' :
  //console.log("Yes, Correct answer");
  alert('Great, Tennis is one of my favorite sports too');
  break;
}


shoeSize = prompt('Is your shoe size 38? Yes/No').toLocaleLowerCase();
switch (shoeSize){
case 'no':
case 'n':
  //console.log("No, Uncorrect answer");
  alert('It seems that you belong to the males and not the females');
  break;
case 'yes':
case 'y' :
  //console.log("Yes, Correct answer");
  alert('Great, The perfect size for women\'s shoes');
  break;
}

// eslint-disable-next-line no-unused-vars
twin = prompt('Do you have a twin? Yes/No').toLocaleLowerCase();
switch (twin){
case 'no':
case 'n':
  //console.log("No, Correct answer");
  alert('Great, Twins are rare. You are unique as me');
  break;
case 'yes':
case 'y' :
  //console.log("Yes,Uncorrect");
  alert('So beautiful!');
  break;
}


