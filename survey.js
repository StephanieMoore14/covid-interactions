function checkAnswers() {
  var choices = document.getElementsByTagName('input');
  var num_answered = 0;
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {

    // if the radio is checked, tally values
    if (choices[i].checked) {
      num_answered += 1;
    }
  }
  if (num_answered != 6){
    window.alert("Please answer all questions.");
  }
};

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

    // check responses for questions 2, 3, 4, 5
    // attend virtual events
    if (choices[i].name == 'q2'){ 
      if (checkInput(choices[i]) == 'yes'){
        custom_answer += "You enjoy virtual networking events a ton. This is a great way to increase your network circle. ";
      }
      if (checkInput(choices[i]) == 'no'){
        custom_answer += "Attending some virtual networking events is beneficial and will greatly impact your network circle. ";
      }
      if (checkInput(choices[i]) == 'maybe'){
        custom_answer += "You sometimes attend virtual networking events. It is a great way to increase your network. ";
      }
    }
    // content creator
    if (choices[i].name == 'q3'){ 
      if (checkInput(choices[i]) == 'yes'){
        custom_answer += "Our algorithm shows that you are active as a content creator!  Continue to share and inspire others with your creative content because it helps others understand and learn more about your field. ";
      }
      if (checkInput(choices[i]) == 'no'){
        custom_answer += "Our algorithm shows that you don't create a lot of content, consider creating Medium blog posts or LinkedIn posts to boost engagement! This will tremendously help build your network.";
      }
      if (checkInput(choices[i]) == 'maybe'){
        custom_answer += "Our algorithm shows that you only sometimes create content online. Consider using more social media outlets such as posting on LinkedIn, blogging, or Youtube videos to continue to optimize your content. ";
      }
    }
    // comments on posts
    if (choices[i].name == 'q4'){ 
      if (checkInput(choices[i]) == 'yes'){
        custom_answer += "You also regularly engage in other people’s LinkedIn posts!  This is a great way to build your connections and social network. ";
      }
      if (checkInput(choices[i]) == 'no'){
        custom_answer += "You can also start building your connections by reaching out to people on LinkedIn and being more engaged with people’s content.  Increase the amount of posts, comments, and likes on LinkedIn to gain a stronger social network presence. ";
      }
      if (checkInput(choices[i]) == 'maybe'){
        custom_answer += "You also occasionally engage on LinkedIn posts!  Consider engaging in people’s content more and also post more on your account to increase social engagement. ";
      }
      
    }
    // camera on or off
    if (choices[i].name == 'q5'){ 
      if (checkInput(choices[i]) == 'yes'){
        custom_answer += 'Additionally, you typically keep your camera on, which is great!  Continue to do so as it leads to more meaningful conversations with your colleagues.<br><br>';
      }
      if (checkInput(choices[i]) == 'no'){
        custom_answer += "Additionally, keeping your camera off does not lead to more or less connections, but it is important to keep your camera on during meetings since it leads to more meaningful and personable conversations.<br><br>";
      }
      if (checkInput(choices[i]) == 'maybe'){
        custom_answer += "Additionally, you sometimes leave your camera on or off during virtual meetings.  Consider keeping your camera on more since it leads to more meaningful conversations with your colleagues and fosters better relationships.<br><br>";
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

  // calculate day number of year

  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);

  // Create Responses
  var response = ""
  response += "The average person meets 3 people per day".link("https://blog.adioma.com/counting-the-people-you-impact-infographic/#:~:text=On%20average%20we%20live%20for,3%20x%20365.24%20%3D%2080%2C000%20people.");
  response += ", which means as of January 1st, 2020 to today, you would have met " + day*3 + " people. Since many people are currently remote, let's see how you compare to others who network: <br><br>";  
  response += 'Based on your answers ';

  if (max_score == 'c1'){ // Extroverted
    response += "you're a star networker! You love to speak to people and networking is your passion.  Continue to build strong networks and relationships.<br><br>";
  }
  if (max_score == 'c2'){ // Introverted
    response += "you may need some help with networking!  Try to reach out to people more on LinkedIn and get to know your colleagues/ classmates.<br><br>"
  }
  if (max_score == 'c3'){ // In Between
    response += "it looks like you are good at networking, but you may want to expand on other ways to help build your network.<br><br>";
  }

  response += custom_answer;

  response += "Here are some Data Science Thought Leaders you should connect with: ";
  response += '<br>';

  var linkedin = ['Darren Kaplan', 'Eugene Hayden', 'Catherine Tao', 'Stephanie Moore', 'Matt Rall', 'Brian Richmond', 'Jenny Lin', 'Catherine Devine', 'Takashi Ueki', 'Laura Edell', 'Nandini Malik', 'Olga Perera', 'Charles Givre', 'Ali Bouhouch', 'Bernard Marr','Dan Becker', 'Josh Odmark', 'Sanjay Basu', 'Vin Vashishta','Angela Shen-Hsieh', 'Dr. Ganapathi Pulipaka'];

  for (i=0; i<4; i++) {
    var string = linkedin[Math.floor(Math.random()*linkedin.length)];
    if (string == 'Eugene Hayden') {
      response += string.link("https://www.linkedin.com/in/eugenehayden/");
      response += ', ';
    } 
    else if (string == 'Darren Kaplan') {
      response += string.link("https://www.linkedin.com/in/darrenkaplan500/");
      response += ', ';
    }
    else if (string == 'Catherine Tao') {
      response += string.link("https://www.linkedin.com/in/catherine-tao/");
      response += ', ';
    } else if (string == 'Stephanie Moore') {
      response += string.link("https://www.linkedin.com/in/stephaniegmoore1/");
      response += ', ';
    } else if (string == 'Matt Rall') {
      response += string.link("https://www.linkedin.com/in/matthew-rall-7b9b7511/");
      response += ', ';
    } else if (string == 'Brian Richmond') {
      response += string.link("https://www.linkedin.com/in/brian-richmond/");
      response += ', ';
    } else if (string == 'Jenny Lin') {
      response += string.link("https://www.linkedin.com/in/jenny-x-lin/");
      response += ', ';
    } else if (string == 'Catherine Devine') {
      response += string.link("https://www.linkedin.com/in/cmdevine/");
      response += ', ';
    } else if (string == 'Takashi Ueki') {
      response += string.link("https://www.linkedin.com/in/takashiueki/");
      response += ', ';
    } else if (string == 'Laura Edell') {
      response += string.link("https://www.linkedin.com/in/lauraerinedell/");
      response += ', ';
    } else if (string == 'Nandini Malik') {
      response += string.link("https://www.linkedin.com/in/nandinimalik/");
      response += ', ';
    } else if (string == 'Olga Perera') {
      response += string.link("https://www.linkedin.com/in/olga-k-22b7193a/");
      response += ', ';
    } else if (string == 'Charles Givre') {
      response += string.link("https://www.linkedin.com/in/cgivre/");
      response += ', ';
    } else if (string == 'Ali Bouhouch') {
      response += string.link("https://www.linkedin.com/in/ali-bouhouch-4774372/");
      response += ', ';
    } else if (string == 'Bernard Marr') {
      response += string.link("https://www.linkedin.com/in/bernardmarr/");
      response += ', ';
    } else if (string == 'Dan Becker') {
      response += string.link("https://www.linkedin.com/in/dansbecker/");
      response += ', ';
    } else if (string == 'Josh Odmark') {
      response += string.link("https://www.linkedin.com/in/joshuaodmark/");
      response += ', ';
    } else if (string == 'Sanjay Basu') {
      response += string.link("https://www.linkedin.com/in/sanjaybasu/");
      response += ', ';
    } else if (string == 'Vin Vashishta') {
      response += string.link("https://www.linkedin.com/in/vineetvashishta/");
      response += ', ';
    } else if (string == 'Angela Shen-Hsieh') {
      response += string.link("https://www.linkedin.com/in/angelashenhsieh/");
      response += ', ';
    } else if (string == 'Dr. Ganapathi Pulipaka') {
      response += string.link("https://www.linkedin.com/in/dr-ganapathi-pulipaka-56417a2/");
      response += ', ';
    }

    var idx = linkedin.indexOf(string);
    linkedin = linkedin.slice(0, idx).concat(linkedin.slice(idx + 1, linkedin.length))
  }

  response = response.slice(0, response.length-2);  
  response += '<br><br>';
  response += "This is a sample output and we would love any feedback on how you'd like to see the results!".bold().fontcolor("red");
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

function openViz() {
  url = 'https://stephaniemoore14.github.io/covid-interactions-viz/';
  window.open(url);
}