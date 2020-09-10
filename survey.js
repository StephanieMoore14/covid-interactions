// function to calculate the result of the survey
function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var c1score = 0;
    var c2score = 0;
    var c3score = 0;
        
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        if (choices[i].value == 'c1') {
          c1score += 1;
        }
        if (choices[i].value == 'c2') {
          c2score += 1;
        }
        if (choices[i].value == 'c3') {
          c3score += 1;
        }
      }

      if (choices[i].name == 'link') {
        var link = choices[i].value;
        localStorage.setItem("LinkedIn", link);  // Save Free Response Question
      }
      if (choices[i].name == 'feeling') {
        var response = choices[i].value;
        localStorage.setItem("response", response);  // Save Free Response Question
      }
      
    }

    var scores = [c1score, c2score, c3score];
    max_score = '';
    max_val = 0;

    for (i=0; i<3; i++) {
      if (scores[i] > max_val){
        max_val = scores[i];
        max_score = 'c' + (i+1);
      }
    }
  

    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');

    // Create Responses
    var response = localStorage.getItem('user answer')
    if (max_score == 'c1'){ // Extroverted
      response += "You're a star networker! You love to speak to people and networking is your passion.  Continue to build strong networks and relationships.<br><br>";
      response += "Here are some ways you can improve your network: <br>";
      response += "- Help others improve their network by giving them advice. <br>";
      response += "- Create meaningful content, quality over quantity! <br><br>";
      response += "Here are someone you should connect with: </br>";
     

    }
    if (max_score == 'c2'){ // Introverted
      response += "You may need some help with networking!  Try to reach out to people more on Linkedin and get to know your colleagues/ classmates.<br><br>"
      response += "Here are some ways you can improve your network:<br>"
      response += "- Reach out on Linkedin.  The point there is to meet more like-minded people!<br>"
      response += "- Take the initiative to reach out to colleagues/ classmates.<br><br>"
      response += "Here are someone you should connect with: ";

    }
    if (max_score == 'c3'){ // In Between
      response += "Looks like you are good at networking, but you may want to expand on other ways to help build your network.<br><br>"
      response += "Here are some ways you can improve your network:<br>"
      response += "- Try some more content creation like LinkedIn posts or blogging and use hashtags! Optimize your posts to reach like-minded people.<br>"
      response += "- Research networking events or webinars for topics that interest you.<br><br>"
      response += "Here are someone you should connect with: ";
    }

    answerbox.innerHTML  = response;

  }

  
  // program the reset button --> to refresh page
  function resetAnswer() {
    // var answerbox = document.getElementById('answer');
    
    function refreshPage(){ 		
      location.reload(); 		
    }
    
    refreshPage();

  }
