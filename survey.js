// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var c1score = 1095;
    var c2score = 1095;
        
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        
        if (choices[i].name = 'q1'){ // are you a introverted
          if (choices[i].value == 'c1') {
            c1score *= .5;
          }
          if (choices[i].value == 'c2') {
            c2score *= 1.5;
          }
        }
        
        // if (choices[i].name = 'q2'){ // do you like coffee
        //   continue;
        // }

        if (choices[i].name = 'q3'){ // are you a student
          if (choices[i].value == 'c1') {
            c1score *= 2;
          }
          if (choices[i].value == 'c2') {
            c2score *= 1.5;
          }
        }

        // if (choices[i].name = 'q4'){ // pets
        //   continue;
        // }

        if (choices[i].name = 'q5'){ // TDS Listener
          if (choices[i].value == 'c1') {
            c1score *= 1.2;
          }
          if (choices[i].value == 'c2') {
            c2score *= 1;
          }
        }
      }

    }
 
    // for (i=0; i<choices.length; i++) {
    //   // if the radio is checked..
    //   choices[i].checked = false;
    // }

    // Find out which choice got the highest score.
    // If you add more choices and outcomes, you must add the variable here.
    // if (c1score == c2score) {
    //   var maxscore = c1score;
    // }

    // if (c1score != c2score) {
    //   var maxscore = Math.round(Math.max(c1score,c2score));
    // }
    
    var maxscore = Math.round(Math.max(c1score,c2score));

    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');

    // Add what default value would have been pre-covid
    answerbox.innerHTML  = 'The average person meets ~3 people per day or ~1095 people in a year. Your answers indicate that you would have met ' + maxscore.toString() + ' this year. But due to the pandemic, you will only meet ' + Math.round((maxscore / 3)).toString() + '. 😥 ';

    // if (Math.round(c1score) == maxscore) { // If user chooses the first choice the most, this outcome will be displayed.
    //   answerbox.innerHTML += maxscore.toString() + ' this year. But due to the pandemic, you will only meet ' + (maxscore / 3).toString();
    // }
    // if (Math.round(c2score) == maxscore) { // If user chooses the second choice the most, this outcome will be displayed.
    //   answerbox.innerHTML += maxscore.toString() + ' this year. But due to the pandemic, you will only meet ' + (maxscore / 3).toString();
    // }

    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      choices[i].checked = false;
    }
  }

  
  // program the reset button
  function resetAnswer() {
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = "Your result will show up here!";
    var c1score = 1095;
    var c2score = 1095;
  }
