//Seleciona o botão de envio

const button = document.querySelector("button"); 
/* document.querySelector(); -> Retorna o primeiro elemento dentro do documento
 que corresponde ao grupo especificado de seletores.*/

//Seleciona a mensagem "Must be valid email"

const validateMessage = document.querySelector(".validate-message");

//Seleciona a entrada de e-mail

const emailInput = document.querySelector("input");

//Seleciona div do validador de e-mail

const emailDiv = document.querySelector(".email-validator");

//Seleciona o ícone de erro do validador de e-mail

const errorIcon = document.querySelector(".email-validator img");
console.log("hi");

//Especificações de email Regexp

const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//================================================

//Adiciona validação de e-mail quando o botão é clicado

button.addEventListener("click", function () {
  validateEmail();
})
/*addEventListener(), manipulador de eventos, 
sintaxe -> target.addEventListener(event, function, useCapture)
UserCapture: um valor Booleano opcional.*/

//===============================================

//Adiciona validação de e-mail quando "enter" é pressionado

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    validateEmail();
  }
})



//==============================================

 //Valida o email


 const validateEmail = function () {
   const email = emailInput.value;

   if (email.match(mailformat)) {
     clearInput();
     validateMessage.innerText = "Success!  See you soon!";
     validateMessage.classList.remove("hide");
     validateMessage.classList.add("success");
     emailDiv.classList.remove("active");
     errorIcon.classList.add("hide");
   } else {
     validateMessage.classList.remove("hide");
     validateMessage.innerText = "Please provide a valid email";
     validateMessage.classList.remove("success");
     emailDiv.classList.add("active");
     errorIcon.classList.remove("hide");

   }
 }

//==============================================

//Limpa a entrada

const clearInput = function () {
  emailInput.value = "";
}

//================================================
