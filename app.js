var btnTranslate =  document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");


function clickHandle()
{
    outputDiv.innerText = "fjdsfslkfk" + txtInput.value;
}

btnTranslate.addEventListener("click",clickHandle);