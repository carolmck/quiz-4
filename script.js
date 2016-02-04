var students = ["Joe", "Jack", "Jane", "Jill"];
var gradeMean = [90, 68, 92, 88];
var loser;
var highestScore= 100;

//Using the data above write a JavaScript that is linked to an html page that determines who has the lowest score.
//Write the answer in sentence form that includes both the name of the student and the score they have.
//Write the answer to both the console and the html page using the document write or other command.

for (i=0; i<gradeMean.length; i++){
  if (gradeMean[i]< highestScore[i]){
    highestScore[i]=gradeMean[i];
    loser= i;
  }
}

console.log(students[loser] + " has the lowest score");
console.log(students[loser]);
console.log(gradeMean[loser]);
