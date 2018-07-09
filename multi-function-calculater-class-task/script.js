
function insert(){
    var userInput = parseInt(document.querySelector("input").value);
    var insertShow = document.querySelector("#insertvalue");
    insertShow.innerHTML = insertShow.innerHTML + userInput;
}