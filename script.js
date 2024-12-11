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
  