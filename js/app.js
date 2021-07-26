'use strict'
let answer1, answer2, answer3, answer4, answer5;
answer1 = prompt("Did you name one of Jupiter's moons? Yes/No").toLocaleLowerCase();

if(answer1 == 'no')
{
    //console.log("Great, Your answer (No) is correct");
    alert("Great, Your answer (No) is correct");
}

answer2 = prompt("Do you drink coffee? Yes/No").toLocaleLowerCase();
if(answer2 == 'yes')
{
    //console.log("Great, Your answer (Yes) is correct");
    alert("Great, Your answer (Yes) is correct");
}

answer3 = prompt("Will you play tennis this year? Yes/No").toLocaleLowerCase();
if(answer3 == 'yes')
{
   //console.log("Great, Your answer (Yes) is correct");
    alert("Great, Your answer (Yes) is correct");
}

answer4 = prompt("Is your shoe size 37? Yes/No").toLocaleLowerCase();
if(answer4 == 'no')
{
    //console.log("Great, Your answer (No) is correct");
    alert("Great, Your answer (No) is correct");
}

answer5 = prompt("Do you have a twin? Yes/No").toLocaleLowerCase();
if(answer1 == 'yes')
{
    //console.log("Great, Your answer (Yes) is correct");
    alert("Great, Your answer (Yes) is correct");
}

let guestName= prompt("What is your name?")
alert("Greeting "+guestName+" A very warm welcome to you! You are a wonderful person with a wonderful view of life. It is lovely to have you among us!");
alert("Hey "+ guestName +"! We’re so excited you are a member of our game. We love all our members, and that includes you too! Enjoy & spread the love.");
document.write("<div id='imgDiv'><img src='./img/welcome-message.jpg' alt='Wlc Pic'></div>");
document.write("<div id='msgDiv'><p><h2> Hey "+ guestName +"! We’re so excited you are a member of our game. We love all our members, and that includes you too! Enjoy & spread the love.</h2></p></div>");