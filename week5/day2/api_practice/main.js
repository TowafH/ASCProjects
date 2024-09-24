// Select Elements for DOM Manipulation
let buttonRef = document.getElementById("generateButton");
let mainInput = document.getElementById("dogInput");
let dogImg = document.getElementById("dogImg");
let dogTitle = document.getElementById("dogTitle");


function generateDog(event){
    event.preventDefault();
    //capture the user's input
    let userInput = mainInput.value;
    console.log(userInput);
    fetch('https://dog.ceo/api/breed/' + userInput + "/images/random")
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(myJson){
         // where we are creating our meaningful code to use the API response
         console.log(myJson);
        if(myJson.status == "error"){
            // when an error occurs
            dogImg.src= "confused.jpg";
            dogImg.style.width = "250px";
            dogTitle.innerText = "Woof, I don't understand";
        }
        else{ // success -> change the image to the dog
            dogImg.src= myJson.message;
            dogImg.style.width = "250px";
            dogTitle.innerText = userInput;
        }
        
    })
}

//Event Listener to allow for Interactivity
buttonRef.addEventListener("click", generateDog);



