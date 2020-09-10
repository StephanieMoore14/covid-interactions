// function to calculate the result of the survey
function tabulateAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var c1score = 0;
  var c2score = 0;
  var c3score = 0;

  var custom_answer = "";
  var custom_advice = [];
      
  // get a list of the radio inputs on the page
  var choices = document.getElementsByTagName('input');
  
  // check answer input
  function checkInput(choice){ 		
    if (choice.value == 'c1') {
      return 'yes';
    }
    if (choice.value == 'c2') {
      return 'no';
    }
    if (choice.value == 'c3') {
      return 'maybe';
    } 		
  }

  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {

    // if the radio is checked, tally values
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

    // check responses for questions 3, 4, 5
    // content creator
    if (choices[i].name == 'q3'){ 
      if (checkInput(choices[i]) == 'yes'){
        custom_answer += "You are active as a content creator!  Continue to share and inspire others with your creative content because it helps others understand and learn more about your field.";
      }
      if (checkInput(choices[i]) == 'no'){
        custom_answer += "Consider creating Medium blog posts or LinkedIn posts to boost your content!  This will tremendously help build your network.";
      }
      if (checkInput(choices[i]) == 'maybe'){
        custom_answer += "You sometimes create online content.  Consider using more social media outlets such as posting on LinkedIn, blogging, or Youtube videos to continue to optimize your content.";
      }
    }
    // comments on posts
    if (choices[i].name == 'q4'){ 
      if (checkInput(choices[i]) == 'yes'){
        custom_answer += "You regularly engage in other people’s LinkedIn posts!  This is a great way to build your connections and social network.";
      }
      if (checkInput(choices[i]) == 'no'){
        custom_answer += "One of the best ways to start building your connections is by reaching out to people on LinkedIn and being more engaged with people’s content.  Increase the amount of posts, comments, and likes on LinkedIn to gain a stronger social network presence.";
      }
      if (checkInput(choices[i]) == 'maybe'){
        custom_answer += "You engage on LinkedIn posts sometimes!  Consider engaging in people’s content more and also post more on your account to increase social engagement.";
      }
      
    }
    // camera on or off
    if (choices[i].name == 'q5'){ 
      if (checkInput(choices[i]) == 'yes'){
        custom_answer += 'You typically keep your camera on, which is great!  Continue to do so as it leads to more meaningful conversations with your colleagues.';
      }
      if (checkInput(choices[i]) == 'no'){
        custom_answer += "Although keeping your camera off does not lead to more or less connections, it is important to keep your camera on during meetings since it leads to more meaningful and personable conversations.";
      }
      if (checkInput(choices[i]) == 'maybe'){
        custom_answer += "You sometimes leave your camera on or off during virtual meetings.  Consider keeping your camera on more since it leads to more meaningful conversations with your colleagues and fosters better relationships.";
      }
    }
  
  }

    // if (choices[i].name == 'link') {
    //   var link = choices[i].value;
    //   localStorage.setItem("LinkedIn", link);  // Save Free Response Question
    // }

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
  // var test_output = localStorage.getItem('response') + localStorage.getItem('LinkedIn');

  // Create Responses
  var response = ""
  if (max_score == 'c1'){ // Extroverted
    response += "You're a star networker! You love to speak to people and networking is your passion.  Continue to build strong networks and relationships.<br><br>";
  }
  if (max_score == 'c2'){ // Introverted
    response += "You may need some help with networking!  Try to reach out to people more on Linkedin and get to know your colleagues/ classmates.<br><br>"
  }
  if (max_score == 'c3'){ // In Between
    response += "Looks like you are good at networking, but you may want to expand on other ways to help build your network.<br><br>";
  }

  response += "Bases on your answers " + custom_answer + "<br>";
  // response += "Here are some tips to improve your network: <br>";
  // response += custom_advice + "<br>";
  response += "Here are someone you should connect with: </br>";

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