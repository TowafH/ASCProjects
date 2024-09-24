console.log("Hello World");

fetch("https://randomuser.me/api")
    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(myJson){
        // Display the data in the Console
        console.log(myJson);

        // Accessing name from data (which holds my JSON info)
        console.log(myJson.results[0].name.first);
        let firstName = myJson.results[0].name.first;
        let p = document.createElement("p"); // Creating a p Tag
        p.innerText = `Welcome, ${firstName}`;
        document.body.appendChild(p);
    })

// ASYNC + AWAIT: data is "undefined" because it needs to *wait* for fetch to finish
// console.log(data);