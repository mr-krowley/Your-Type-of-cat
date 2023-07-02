import { data } from "./cat.js";

const containerCard = document.querySelector(".containerCard");
const input = document.querySelector("input");




function createCard(obj) {
  
  //создаем саму карточу котика
  let card = document.createElement("div");
  card.classList.add("catCard");

  let image = document.createElement("img");
  image.classList.add("image");
  image.setAttribute("src", obj.img);



  let title = document.createElement("p"); //создаем текст название котика в карточки 
  title.classList.add("catName"); //обращение к стилям
  title.textContent = obj.title; // достаем название котика

  card.append(image, title);
  containerCard.append(card);
}


function reviewCard(arr) {
  arr.forEach(function (elem) {
    createCard(elem);
  });
} 

reviewCard(data);