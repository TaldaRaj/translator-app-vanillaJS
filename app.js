var btnTranslate = document.querySelector("#btn-translate");

var inputText = document.querySelector("#inputText")

var outputText = document.querySelector("#text-output")

var baseUrl = "https://api.funtranslations.com/translate/pirate.json"

var finalUrl = baseUrl + "?text=" 

console.log(finalUrl)
function errorHandler(error)
{
alert("there some problem with the server, please try after some time")
}

btnTranslate.addEventListener("click",function clickHandler(){

    fetch(finalUrl+inputText.value)
    .then(response => response.json())
    .then(json => outputText.innerText = json.contents.translated)
    .catch(errorHandler)
})

