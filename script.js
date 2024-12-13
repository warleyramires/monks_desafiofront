let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight === "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

function openModal(imageSrc, title, description) {
  document.getElementById("modal-cards").style.display = "flex";
  document.getElementById("modal-image").src = imageSrc;
  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-description").innerText = description;
}

function closeModal() {
  document.getElementById("modal-cards").style.display = "none";
}

const cards = document.querySelectorAll(".box-image-info");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const imageSrc = card.querySelector("img").src;
    const title = card.querySelector("h3").innerText;
    const description = card.querySelector("p").innerText;

    openModal(imageSrc, title, description);
  });
});

const form = document.getElementById("form-contato");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeInput = document.getElementById("nome");
  const sobrenomeInput  = document.getElementById("sobrenome");
  const emailInput  = document.getElementById("email");
  const telefoneInput  = document.getElementById("telefone");
  const inputResultado = document.getElementById("resultado");
  const resultado = parseInt(inputResultado.value);
  const tagNum1 = document.getElementById("num1");
  const tagNum2 = document.getElementById("num2");
  const num1 = parseInt(tagNum1.innerText);
  const num2 = parseInt(tagNum2.innerText);

  const nome = nomeInput.value
  const sobrenome = sobrenomeInput.value
  const email = emailInput.value
  const telefone = telefoneInput.value

  console.log(num1, num2);
  console.log(tagNum1, tagNum1);
  console.log()
  let booleanResult = verificaResultado(num1, num2, resultado);
  console.log(booleanResult);

  if (!booleanResult) {
    trocaNumeros(tagNum1, tagNum2);
    inputResultado.style.border = "2px solid red";
    inputResultado.style.backgroundColor = "#ff95003f";
  } else {
    showSuccessModal();
    salvaPessoa(nome, sobrenome, email, telefone)
    limpaCampos(nomeInput, sobrenomeInput, emailInput, telefoneInput, inputResultado)
  }
});

function verificaResultado(num1, num2, resultado) {
  if (num1 + num2 === resultado) {
    return true;
  } else {
    return false;
  }
}

function trocaNumeros(tagNum1, tagNum2) {
  var novoNumero1 = Math.floor(Math.random() * 999) + 1;
  var novoNumero2 = Math.floor(Math.random() * 999) + 1;

  tagNum1.innerText = novoNumero1;
  tagNum2.innerText = novoNumero2;
}

function showSuccessModal() {
  const modal = document.getElementById("success-modal");
  modal.style.display = "flex";
}

function closeSuccessModal() {
  const modal = document.getElementById("success-modal");
  modal.style.display = "none";
}

function salvaPessoa(nome, sobrenome, email, telefone){
  const pessoa = {
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    telefone: telefone,
  }
  console.log(pessoa);
}

function limpaCampos(nomeInput, sobrenomeInput, emailInput, telefoneInput, inputResultado){
  nomeInput.value = ""; 
  sobrenomeInput.value = "";
  emailInput.value = ""; 
  telefoneInput.value = "";  
  inputResultado.value = ""; 
  inputResultado.style.border = "none";
  inputResultado.style.backgroundColor = "#fff";
}