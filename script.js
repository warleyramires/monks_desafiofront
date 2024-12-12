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
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-description").innerText = description;
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
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
  

  const form = document.getElementById('form-contato')

  form.addEventListener('submit', function(e){
    e.preventDefault()

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const inputResultado = document.getElementById("resultado").value
    const resultado = parseInt(inputResultado)

    const tagNum1 = document.getElementById("num1")
    const tagNum2 = document.getElementById("num2")
    console.log(tagNum1, tagNum1);
    const num1 = parseInt(tagNum1.innerText);
    const num2 = parseInt(tagNum2.innerText);
    
    console.log(nome, sobrenome, email, telefone, typeof(resultado));
    console.log(num1, num2);
    let booleanResult = verificaResultado(num1, num2, resultado)
    console.log(booleanResult)

    if(!booleanResult){
      trocaNumeros(tagNum1, tagNum2)
    }else{
      console.log("não faz nada")
    }

  })


  function verificaResultado(num1, num2, resultado){
    if(num1+num2 === resultado){
      return true
    }else{
      return false;
    }
  }

  function trocaNumeros(tagNum1, tagNum2){

    var novoNumero1 = Math.floor(Math.random() * 999) + 1;
    var novoNumero2 = Math.floor(Math.random() * 999) + 1;

    tagNum1.innerText = novoNumero1;
    tagNum2.innerText = novoNumero2;
  }