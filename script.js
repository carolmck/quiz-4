var students = ["Joe", "Jack", "Jane", "Jill"];
var gradeMean = [90, 68, 92, 88];

var highestScore = 100;
var loser;

//Using the data above write a JavaScript that is linked to an html page that determines who has the lowest score.
//Write the answer in sentence form that includes both the name of the student and the score they have.
//Write the answer to both the console and the html page using the document write or other command.

for (i=0; i<students.length; i++) {
  if (gradeMean[i] < highestScore){
    highestScore = gradeMean[i];
    loser = i;
  }
}

console.log(students[loser] + " has the lowest score of " + gradeMean[loser]);
console.log(students[loser]);

document.getElementById("content").innerHTML=students[loser]+ " has the lowest score.";
