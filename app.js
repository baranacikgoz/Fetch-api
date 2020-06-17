document.querySelector("#button1").addEventListener("click", getTextFile);
document.querySelector("#button2").addEventListener("click", getJSON);
document.querySelector("#button3").addEventListener("click", getApi);


function getTextFile(){
    fetch("https://github.com/baranacikgoz/Fetch-api/blob/master/textfile.txt").then(response => response.text()).then(data => {
        
        return response.text();

    });
}


function getJSON(){
    Headers
    fetch("https://employe-management-api.herokuapp.com/users").then(response => response.json()).then(data => {
        
        let output = "<ul>";

        data.forEach(function(data){
            
            output += `<li>Ad ${data.name} - Job ${data.jobTitle}`
        })

        output += "</ul>";

        document.getElementById("output").innerHTML += output;

    })
}


function getApi(){
    Headers
    fetch("https://api.github.com/users").then(response => response.json()).then(users => {
        
        let output = "<ul>";

        users.forEach(function(user){
            
            output += `<li>User Name:  ${user.login}`
        })

        output += "</ul>";

        document.getElementById("output").innerHTML += output;

      

    });
    
}
