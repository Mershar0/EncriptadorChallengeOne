const encryptButton = document.getElementById("encryptButton"); 
const decryptButton = document.getElementById("decryptButton");  
const copyButton = document.getElementById("copyButton"); 
const listenButton = document.getElementById("listenButton");  
const textIn = document.getElementById("textIn");  
const textOut = document.getElementById("textOut"); 

const encryptText = document.getElementById("encryptText");


function tValidate (){
  const valid = document.getElementById("textIn").value;
  const regex = /^[a-z\sñ]+$/g;
  const isValid = regex.test(valid);

  if (!isValid) {
    alert ("Sólo se aceptan letras minúsculas y sin tilde.")
    document.getElementById("textIn").value = '';
    document.getElementById("muneco").style.display = "show";
    document.getElementById("muneco").style.display = "inherit";
    document.getElementById("msg_title").style.display = "show";
    document.getElementById("msg_title").style.display = "inherit";
    document.getElementById("paragraph").style.display = "show";
    document.getElementById("paragraph").style.display = "inherit";
    document.getElementById("copyButton").style.display = "none";
    document.getElementById("listenButton").style.display = "none";
    document.getElementById("textOut").style.display = "none";
  }

}


function encrypt (){  
  hideShow();
  tValidate();

  var msgIn = textIn.value;
  var encryptMsg = msgIn 
  .replaceAll ("e", "enter")
  .replaceAll ("i", "imes")
  .replaceAll ("a", "ai")
  .replaceAll ("o", "ober")
  .replaceAll ("u", "ufat");

  textOut.value = encryptMsg;
};

function decrypt (){
  hideShow();
  tValidate();
  
  var encryptMsg = textIn.value;
  var msgIn = encryptMsg
  .replaceAll ("enter", "e")
  .replaceAll ("imes", "i")
  .replaceAll ("ai", "a")
  .replaceAll ("ober", "o")
  .replaceAll ("ufat", "u");

  textOut.value = msgIn;
};

function copy (){
  var encryptMsg = textOut.value;
  navigator.clipboard.writeText(encryptMsg);
  textIn.value = " ";
  textIn.focus();
};

function toListen (){
  var encryptMsg = textOut.value;
  let msg = new SpeechSynthesisUtterance();
  msg.text = encryptMsg;
  msg.lang = "es-Es";
  window.speechSynthesis.speak(msg);
}


function hideShow (){
  document.getElementById("muneco").style.display = "none";
  document.getElementById("msg_title").style.display = "none";
  document.getElementById("paragraph").style.display = "none";
  document.getElementById("copyButton").style.display = "show";
  document.getElementById("copyButton").style.display = "inherit";
  document.getElementById("listenButton").style.display = "show";
  document.getElementById("listenButton").style.display = "inherit";
  document.getElementById("textOut").style.display = "show";
  document.getElementById("textOut").style.display = "inherit";
};




//llamado de función
encryptButton.onclick = encrypt;
decryptButton.onclick = decrypt;
copyButton.onclick = copy;
listenButton.onclick = toListen;
