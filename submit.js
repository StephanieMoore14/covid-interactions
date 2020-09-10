function sendJSON(){ 
               
    let result = document.querySelector('.result'); 
    let LinkedIn = document.querySelector('#LinkedIn'); 
    let response = document.querySelector('#response'); 

    var LinkedIn = localStorage.getItem(link);  // Save Free Response Question
    var Response = localStorage.getItem(response)
       
    // Creating a XHR object 
    let xhr = new XMLHttpRequest(); 
    let url = "submit.php"; 

    // open a connection 
    xhr.open("POST", url, true); 

    // Set the request header i.e. which type of content you are sending 
    xhr.setRequestHeader("Content-Type", "application/json"); 

    // Create a state change callback 
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 200) { 

            // Print received data from server 
            result.innerHTML = this.responseText; 

        } 
    }; 

    // Converting JSON data to string 
    var data = JSON.stringify({ "LinkedIn": LinkedIn.value, "free_response": Response.value }); 

    // Sending data with the request 
    xhr.send(data); 
} 