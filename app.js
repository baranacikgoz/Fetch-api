document.querySelector("#button1").addEventListener("click", getTextFile);
document.querySelector("#button2").addEventListener("click", getJSON);


function getTextFile(){
    Headers
    fetch("https://github.com/baranacikgoz/Fetch-api/blob/master/textfile.txt").then(function(response){
        
        return response.json();

    }).then(function(data){
       document.getElementById("output").innerHTML += data;
    }).catch(function(err){
        console.log(err);
    })
}


function getJSON(){
    Headers
    fetch("https://github.com/baranacikgoz/Fetch-api/blob/master/article.json").then(function(response){
        
        return response.text();

    }).then(function(data){
       document.getElementById("output").innerHTML += data;
    }).catch(function(err){
        console.log(err);
    })
}
