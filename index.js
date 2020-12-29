var readlineSync = require("readline-sync");
var score = 0;

question1 = {
  question: "Which football club do I support? ",
  answer: "Arsenal"
};

question2 = {
  question: "What's my favourite sports brand? ",
  answer: "Nike"
};

question3 = {
  question: "Which car do I own? ",
  answer: "Honda"
};


function quiz(question,answer)
{
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() == answer.toUpperCase())
{
  console.log("You know me so well");
  score = score+1;
  console.log("Your score after this question " + score);
}
else
{
  console.log("We need to catchup as you have forgotten me")
  score = score-1;
}

}
var play = [question1,question2,question3];

for(var i = 0; i < play.length; i++)
{
  var currentquestion = play[i];
  quiz(currentquestion.question,currentquestion.answer);
}

console.log("Your final score is "+ score);