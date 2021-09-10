var btnTranslate =  document.querySelector("#btn-translate");

btnTranslate.addEventListener("click",clickHandle)

var txtInput = document.querySelector("#txt-input");

// console.log(txtInput);

function clickHandle()
{
    console.log("clicked!");
    console.log("input",txtInput.value);
}

