document.querySelector("#button1").addEventListener("click", getTextFile);

function getTextFile(){
    fetch("textfile.txt").then(function(response){
        console.log(response);
    })
}
