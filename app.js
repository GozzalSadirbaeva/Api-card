let container = document.querySelector(".container");
let divData = document.createElement("div");
divData.classList.add("cardData");

container.append(divData);

function createCard(result) {
  let cardData = document.createElement("div");
  let imgData = document.createElement("img");
  let text = document.createElement("div");
  let albumId = document.createElement("h1");
  let idData = document.createElement("h2");
  let title = document.createElement("h3");
  cardData.classList.add("card");
  imgData.classList.add("img");
  text.classList.add("text-content");
  imgData.src = result.url;
  albumId.textContent = result.albumId;
  idData.textContent = result.id;
  title.textContent = result.title;
  divData.append(cardData);
  cardData.append(imgData, text);
  text.append(albumId, idData, title);
}

async function getData() {
  let result = await fetch("https://jsonplaceholder.typicode.com/photos");
  let data = await result.json();

  data.forEach((result) => {
    createCard(result);
  });
}
getData();
